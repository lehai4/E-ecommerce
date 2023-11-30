export function html({ url, text }: { url: string; text: string }) {
  return `
  <div class="container h-full min-h-screen flex items-center justify-center">
  <div class="border rounded-lg">
      <h2>Welcome to the NextJs CMS of LeChiHai</h2>
      <p>Just click the button below to validate your email address</p>
  </div>
  <button
      style="background-color: red; color: white;border: 1px solid red; padding:  10px 15px; font-size: 22px;">
      <a href=${url}>${text}</a></button>
  <p>If the button doesn't work for any season, you can alse click on the link below'</p>
  <a href=${url}>${url}</a>
</div>`;
}
