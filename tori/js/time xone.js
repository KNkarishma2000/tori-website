function updateTimeZones() {
    const options = { weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true };
  
    const pacificTimeElement = document.getElementById('pacific-time');
    const usEasternTimeElement = document.getElementById('us-eastern-time');
    const ukTimeElement = document.getElementById('uk-time');
    const istTimeElement = document.getElementById('ist-time');
    const australiaTimeElement = document.getElementById('australia-time');
    
    const now = new Date();
    
    const pacificTime = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles', ...options });
    const usEasternTime = now.toLocaleString('en-US', { timeZone: 'America/New_York', ...options });
    const ukTime = now.toLocaleString('en-GB', { timeZone: 'Europe/London', ...options });
    const istTime = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', ...options });
    const australiaTime = now.toLocaleString('en-AU', { timeZone: 'Australia/Sydney', ...options });
  
    pacificTimeElement.textContent = pacificTime;
    usEasternTimeElement.textContent = usEasternTime;
    ukTimeElement.textContent = ukTime;
    istTimeElement.textContent = istTime;
    australiaTimeElement.textContent = australiaTime;
  }
  
  // Update the time zones every minute
  setInterval(updateTimeZones, 60000);
  
  // Initialize the time zones on page load
  updateTimeZones();