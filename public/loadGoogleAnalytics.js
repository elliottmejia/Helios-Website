export default function loadGoogleAnalytics() {
  if (localStorage.disableGA) {
    // Disable GA
    return;
  }

  const gaScript = document.createElement("script");
  gaScript.type = "text/partytown";
  gaScript.async = true;
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-8LMHL40QTT";

  const partytownScript = document.createElement("script");
  partytownScript.type = "text/partytown";
  partytownScript.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8LMHL40QTT');
    `;

  document.head.appendChild(gaScript);
  document.head.appendChild(partytownScript);
}
