<script>
  import { APP_NAME, URL } from "@app/common";
</script>

<style>
  .spacer {
    height: 2rem;
  }

  ul {
    list-style: none;
    margin-left: 0;
  }
</style>

<div class="spacer" />
<footer class="footer">
  <div class="columns">
    <div class="column is-3">
      <h6 class="is-size-5">
        <strong>{APP_NAME}</strong> by <a
          href="mailto:wm.wooley@gmail.com"
          target="_blank">Michael Wooley</a>.
      </h6>
      <ul class="is-size-7">
        <li>
          <a
            href="https://github.com/michaelwooley/bhw-svelte"
            target="_blank">Source code</a> licensed <a
            href="https://opensource.org/licenses/mit-license.php"
            target="_blank">MIT</a>.
        </li>
      </ul>
    </div>
    <div class="column is-3">
      <h6 class="is-size-5"><strong>Contribute</strong> on GitHub</h6>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=michaelwooley&repo=bhw-svelte&type=star&count=false&size=large"
        frameborder="0"
        scrolling="0"
        width="170"
        height="30"
        title="GitHub Star" />
      <br />
      <iframe
        src="https://ghbtns.com/github-btn.html?user=michaelwooley&type=follow&count=true&size=large"
        frameborder="0"
        scrolling="0"
        width="230"
        height="30"
        title="GitHub Follow" />
    </div>
    <div class="column is-3">
      <h6 class="is-size-5"><strong>Credits</strong></h6>
      <ul class="is-size-7">
        <li>
          Weather data drawn from <a href="https://www.weather.gov/documentation/services-web-api#/" target="_blank">National
            Weather Service (weather.gov)</a>
        </li>
        <li>Built with <a href="svelte.dev" target="_blank">svelte</a></li>
        <li>UI by <a href="https://bulma.io" target="_blank">bulma</a></li>
        <li>
          Icons by <a href="https://fontawesome.com" target="_blank">Font
            Awesome</a>
        </li>
      </ul>
    </div>
    <div class="column" />
    <div class="column is-narrow">
      <h6 class="is-size-5"><strong>Share</strong></h6>
      <ul class="is-size-7">
        <li>
          <a
            href={`https://twitter.com/home?status=${URL} A free weather app, written in svelte!`}
            target="_blank">
            <span class="icon"> <i class="fab fa-twitter" /> </span>
            <span>Twitter</span>
          </a>
        </li>
        <li>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${URL}&title=${APP_NAME}&summary=A free weather app, written in svelte!&source=`}
            target="_blank">
            <span class="icon"> <i class="fab fa-linkedin" /> </span>
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${URL}`}
            target="_blank">
            <span class="icon"> <i class="fab fa-facebook" /> </span>
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href={`mailto:info@example.com?body=${URL}`} target="_blank">
            <span class="icon"> <i class="fas fa-envelope" /> </span>
            <span>Email</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
