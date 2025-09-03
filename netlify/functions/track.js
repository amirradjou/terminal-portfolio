// File: netlify/functions/track.js

exports.handler = async function(event, _context) {
  // 1. Get data from the link's query parameters
  const company = event.queryStringParameters.company || 'Unknown Company';
  const role = event.queryStringParameters.role || 'Unknown Role';
  
  // 2. Get visitor info from the request headers
  const ip = event.headers['x-nf-client-connection-ip'];
  const userAgent = event.headers['user-agent'];
  
  // 3. Log the information
  const visitDetails = `
    New Portfolio Visit!
    ----------------------
    🏢 Company: ${company}
    👨‍💻 Role: ${role}
    🗓️ Date: ${new Date().toString()}
    📍 IP Address: ${ip}
    💻 User Agent: ${userAgent}
  `;

  console.log(visitDetails);

  // 4. Redirect the visitor to your actual portfolio
  return {
    statusCode: 302,
    headers: {
      Location: 'https://amirradjou.com/',
    },
  };
};
