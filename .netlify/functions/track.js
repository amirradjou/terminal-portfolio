// File: netlify/functions/track.js

exports.handler = async function(event, context) {
  // 1. Get data from the link's query parameters
  const company = event.queryStringParameters.company || 'Unknown Company';
  const role = event.queryStringParameters.role || 'Unknown Role';
  
  // 2. Get visitor info from the request headers
  // WARNING: IP addresses are PII. Handle this data responsibly.
  const ip = event.headers['x-nf-client-connection-ip'];
  const userAgent = event.headers['user-agent'];
  
  // 3. Log the information (you can customize this!)
  const visitDetails = `
    New Portfolio Visit!
    ----------------------
    🏢 Company: ${company}
    👨‍💻 Role: ${role}
    🗓️ Date: ${new Date().toString()}
    📍 IP Address: ${ip}
    💻 User Agent: ${userAgent}
  `;

  // For now, we'll just log it to the Netlify Function console.
  // See below for how to send an email or Slack message.
  console.log(visitDetails);

  // 4. Redirect the visitor to your actual portfolio
  return {
    statusCode: 302, // This is a temporary redirect
    headers: {
      Location: 'https://amirradjou.com', // <-- IMPORTANT: CHANGE THIS
    },
  };
};
