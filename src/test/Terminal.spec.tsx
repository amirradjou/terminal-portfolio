import { describe, it, expect, vi } from "vitest";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import { render, screen, userEvent } from "../utils/test-utils";
import Terminal, { commands } from "../components/Terminal";
import { cvCommands } from "../components/commands/Cv";
import { profile, projects, socials } from "../data/profile";

// setup function
function setup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

const allCmds = commands.map(cmdObj => cmdObj.cmd);

describe("Terminal Component", () => {
  let terminalInput: HTMLInputElement;
  let user: UserEvent;

  beforeEach(() => {
    const termSetup = setup(<Terminal />);
    user = termSetup.user;
    terminalInput = screen.getByTitle("terminal-input");
  });

  describe("Input Features & Initial State", () => {
    it("should display welcome cmd by default", () => {
      expect(screen.getByTestId("input-command").textContent).toBe("welcome");
    });

    it("should show a plain-text name, headline and recruiter links in the hero", () => {
      const hero = screen.getByTestId("welcome");
      expect(screen.getByTestId("hero-name").textContent).toBe(profile.name);
      expect(hero.textContent).toContain(profile.headline);

      const linkedin = screen.getByRole("link", { name: "LinkedIn" });
      expect(linkedin).toHaveAttribute("href", profile.linkedin);
      expect(linkedin).toHaveAttribute("target", "_blank");
      expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
        "href",
        profile.github
      );
      expect(screen.getByRole("link", { name: "CV (PDF)" })).toHaveAttribute(
        "href",
        profile.cvPath
      );
      expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
        "href",
        `mailto:${profile.email}`
      );
    });

    it("should change input value", async () => {
      await user.type(terminalInput, "demo");
      expect(terminalInput.value).toBe("demo");
    });

    it("should clear input value when click enter", async () => {
      await user.type(terminalInput, "demo{enter}");
      expect(terminalInput.value).toBe("");
    });
  });

  describe("Input Commands", () => {
    it("should return 'command not found' when input value is invalid", async () => {
      await user.type(terminalInput, "demo{enter}");
      expect(screen.getByTestId("not-found-0").innerHTML).toBe(
        "command not found: demo"
      );
    });

    it("should return 'visitor' when user type 'whoami' cmd", async () => {
      await user.type(terminalInput, "whoami{enter}");
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "visitor"
      );
    });

    it("should match commands case-insensitively and echo the input as typed", async () => {
      await user.type(terminalInput, "WhoAmI{enter}");
      expect(screen.getAllByTestId("input-command")[0].textContent).toBe(
        "WhoAmI"
      );
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "visitor"
      );
      expect(screen.queryByTestId("not-found-0")).toBeNull();
    });

    it("should return '/home/amirreza' when user type 'pwd' cmd", async () => {
      await user.type(terminalInput, "pwd{enter}");
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "/home/amirreza"
      );
    });

    it("should display cmd history when user type 'history' cmd", async () => {
      await user.type(terminalInput, "whoami{enter}");
      await user.type(terminalInput, "history{enter}");

      const commands =
        screen.getByTestId("latest-output").firstChild?.childNodes;

      expect(commands?.length).toBe(3);

      const typedCommands: string[] = [];
      commands?.forEach(cmd => {
        typedCommands.push(cmd.textContent || "");
      });

      expect(typedCommands).toEqual(["welcome", "whoami", "history"]);
    });

    it("should clear everything when user type 'clear' cmd", async () => {
      await user.type(terminalInput, "clear{enter}");
      expect(screen.getByTestId("terminal-wrapper").children.length).toBe(1);
    });

    it("should return `hello world` when user type `echo hello world` cmd", async () => {
      await user.type(terminalInput, "echo hello world{enter}");
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "hello world"
      );
    });

    it("should return `hello world` without quotes when user type `echo 'hello world'` cmd", async () => {
      // omit single quotes
      await user.type(terminalInput, "echo 'hello world'{enter}");
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "hello world"
      );

      // omit double quotes
      await user.type(terminalInput, 'echo "hello world"{enter}');
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "hello world"
      );

      // omit backtick
      await user.type(terminalInput, "echo `hello world`{enter}");
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "hello world"
      );
    });

    it("should render Welcome component when user type 'welcome' cmd", async () => {
      await user.type(terminalInput, "clear{enter}");
      await user.type(terminalInput, "welcome{enter}");
      expect(screen.getByTestId("welcome")).toBeInTheDocument();
    });

    const otherCmds = [
      "about",
      "education",
      "experience",
      "help",
      "history",
      "projects",
      "socials",
      "themes",
    ];
    otherCmds.forEach(cmd => {
      it(`should render ${cmd} component when user type '${cmd}' cmd`, async () => {
        await user.type(terminalInput, `${cmd}{enter}`);
        expect(screen.getByTestId(`${cmd}`)).toBeInTheDocument();
      });
    });
  });

  describe("Content matches the CV", () => {
    it("should describe the current role in 'about' and not the old job search", async () => {
      await user.type(terminalInput, "about{enter}");
      const about = screen.getByTestId("about").textContent ?? "";
      expect(about).toContain(profile.company);
      expect(about).toContain(profile.role);
      expect(about).not.toMatch(/seeking|recent graduate/i);
    });

    it("should list every employer from the CV in 'experience'", async () => {
      await user.type(terminalInput, "experience{enter}");
      const experience = screen.getByTestId("experience").textContent ?? "";
      ["CIBC", "Dandelion Network", "York University"].forEach(employer =>
        expect(experience).toContain(employer)
      );
    });

    it("should show the CV education dates", async () => {
      await user.type(terminalInput, "education{enter}");
      const education = screen.getByTestId("education").textContent ?? "";
      expect(education).toContain("Sep 2022 - Oct 2025");
      expect(education).toContain("Oct 2018 - Aug 2022");
    });

    it("should only link to https URLs in socials and projects", () => {
      [...socials, ...projects].forEach(({ url }) => {
        expect(url).toMatch(/^https:\/\//);
        expect(url).not.toMatch(/netlify\.app/);
      });
    });
  });

  describe("Redirect commands", () => {
    beforeEach(() => {
      window.open = vi.fn();
    });

    cvCommands.forEach(cmd => {
      it(`should open the CV when user type '${cmd}' cmd`, async () => {
        await user.type(terminalInput, `${cmd}{enter}`);
        expect(window.open).toHaveBeenCalledWith(profile.cvPath, "_blank");
        expect(screen.getByTestId("cv").textContent).toContain(
          `${profile.website}${profile.cvPath}`
        );
      });
    });

    it("should open mail app when user type 'email' cmd", async () => {
      await user.type(terminalInput, "email{enter}");
      expect(window.open).toHaveBeenCalled();
      expect(screen.getByTestId("latest-output").firstChild?.textContent).toBe(
        "amirreza.radjou@gmail.com"
      );
    });

    projects.forEach(({ id, url }) => {
      it(`should redirect to project URL when user type 'projects go ${id}' cmd`, async () => {
        await user.type(terminalInput, `projects go ${id}{enter}`);
        expect(window.open).toHaveBeenCalledWith(url, "_blank");
      });
    });

    socials.forEach(({ id, url }) => {
      it(`should redirect to social media when user type 'socials go ${id}' cmd`, async () => {
        await user.type(terminalInput, `socials go ${id}{enter}`);
        expect(window.open).toHaveBeenCalledWith(url, "_blank");
      });
    });

    it("should not redirect for a project/social number that does not exist", async () => {
      await user.type(
        terminalInput,
        `projects go ${projects.length + 1}{enter}`
      );
      await user.type(terminalInput, `socials go ${socials.length + 1}{enter}`);
      expect(window.open).not.toHaveBeenCalled();
    });

    // Every output is re-mounted on each submit; only the newest one may open.
    [
      "cv",
      "resume",
      "email",
      `projects go ${projects[0].id}`,
      `socials go ${socials[0].id}`,
    ].forEach(cmd => {
      it(`should open exactly one window per '${cmd}' cmd, however often it is repeated`, async () => {
        await user.type(terminalInput, `${cmd}{enter}`);
        expect(window.open).toHaveBeenCalledTimes(1);
        await user.type(terminalInput, `${cmd}{enter}`);
        expect(window.open).toHaveBeenCalledTimes(2);
        await user.type(terminalInput, `${cmd}{enter}`);
        expect(window.open).toHaveBeenCalledTimes(3);
        expect(screen.getAllByTestId("input-command")).toHaveLength(4);
      });
    });

    it("should not reopen the CV when a later command is submitted", async () => {
      await user.type(terminalInput, "cv{enter}");
      await user.type(terminalInput, "about{enter}");
      await user.type(terminalInput, "help{enter}");
      expect(window.open).toHaveBeenCalledTimes(1);
    });
  });

  describe("Invalid Arguments", () => {
    const specialUsageCmds = ["themes", "socials", "projects"];
    const usageCmds = allCmds.filter(
      cmd => !["echo", ...specialUsageCmds].includes(cmd)
    );

    usageCmds.forEach(cmd => {
      it(`should return usage component for ${cmd} cmd with invalid arg`, async () => {
        await user.type(terminalInput, `${cmd} sth{enter}`);
        expect(screen.getByTestId("usage-output").innerHTML).toBe(
          `Usage: ${cmd}`
        );
      });
    });

    specialUsageCmds.forEach(cmd => {
      it(`should return usage component for '${cmd}' cmd with invalid arg`, async () => {
        await user.type(terminalInput, `${cmd} sth{enter}`);
        expect(screen.getByTestId(`${cmd}-invalid-arg`)).toBeInTheDocument();
      });

      it(`should return usage component for '${cmd}' cmd with extra args`, async () => {
        const arg = cmd === "themes" ? "set light" : "go 1";
        await user.type(terminalInput, `${cmd} ${arg} extra-arg{enter}`);
        expect(screen.getByTestId(`${cmd}-invalid-arg`)).toBeInTheDocument();
      });

      it(`should return usage component for '${cmd}' cmd with incorrect option`, async () => {
        const arg = cmd === "themes" ? "go light" : "set 4";
        window.open = vi.fn();

        // firstly run commands correct options
        await user.type(terminalInput, `projects go ${projects.length}{enter}`);
        await user.type(terminalInput, `socials go ${socials.length}{enter}`);
        await user.type(terminalInput, `themes set espresso{enter}`);

        // then run cmd with incorrect options
        await user.type(terminalInput, `${cmd} ${arg}{enter}`);
        expect(window.open).toBeCalledTimes(2);

        // TODO: Test theme change
      });
    });
  });

  describe("Keyboard shortcuts", () => {
    allCmds.forEach(cmd => {
      it(`should autocomplete '${cmd}' when 'Tab' is pressed`, async () => {
        await user.type(terminalInput, cmd.slice(0, 2));
        await user.tab();
        expect(terminalInput.value).toBe(cmd);
      });
    });

    allCmds.forEach(cmd => {
      it(`should autocomplete '${cmd}' when 'Ctrl + i' is pressed`, async () => {
        await user.type(terminalInput, cmd.slice(0, 2));
        await user.keyboard("{Control>}i{/Control}");
        expect(terminalInput.value).toBe(cmd);
      });
    });

    it("should hint the real social/project names after 'socials go ' and 'projects go '", async () => {
      await user.type(terminalInput, "socials go ");
      await user.tab();
      socials.forEach(({ id, title }) =>
        expect(screen.getByText(`${id}.${title}`)).toBeInTheDocument()
      );

      await user.clear(terminalInput);
      await user.type(terminalInput, "projects go ");
      await user.tab();
      projects.forEach(({ id, title }) =>
        expect(screen.getByText(`${id}.${title}`)).toBeInTheDocument()
      );
    });

    it("should clear when 'Ctrl + l' is pressed", async () => {
      await user.type(terminalInput, "history{enter}");
      await user.keyboard("{Control>}l{/Control}");
      expect(screen.getByTestId("terminal-wrapper").children.length).toBe(1);
    });

    it("should go to previous back and forth when 'Up & Down Arrow' is pressed", async () => {
      await user.type(terminalInput, "about{enter}");
      await user.type(terminalInput, "whoami{enter}");
      await user.type(terminalInput, "pwd{enter}");
      await user.keyboard("{arrowup>3}");
      expect(terminalInput.value).toBe("about");
      await user.keyboard("{arrowup>2}");
      expect(terminalInput.value).toBe("welcome");
      await user.keyboard("{arrowdown>2}");
      expect(terminalInput.value).toBe("whoami");
      await user.keyboard("{arrowdown}");
      expect(terminalInput.value).toBe("pwd");
      await user.keyboard("{arrowdown}");
      expect(terminalInput.value).toBe("");
    });
  });
});
