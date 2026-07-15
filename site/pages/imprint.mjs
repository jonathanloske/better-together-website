export function renderImprint({ t }) {
  return `<div class="bg-black leading-6 text-white">
  <div class="mx-auto max-w-2xl px-4 py-8">
    <div class="">
      <div>
        <h4 class="mb-4 text-3xl font-bold">${t("title")}</h4>
        <div class="mb-4">
          <div class="font-bold">${t("companyName")}</div>
          <div>Bismarckstr. 78</div>
          <div>10627 Berlin</div>
          <p>${t("country")}</p>
        </div>
        <div class="mb-4">${t("representedBy")}</div>
        <div class="mb-4">
          <div>
            ${t("phone")}
            <span id="telcontainer">
              <button
                type="button"
                class="js-reveal-code cursor-pointer underline"
                data-type="tel"
                data-add="58182"
                data-code=";28185#&amp;;35#&amp;;28185#&amp;;35#&amp;;28185#&amp;;45#&amp;;28185#&amp;;05#&amp;;28185#&amp;;45#&amp;;28185#&amp;;25#&amp;;28185#&amp;;65#&amp;;28185#&amp;;45#&amp;;28185#&amp;;94#&amp;;28185#&amp;;35#&amp;;28185#&amp;;94#&amp;;28185#&amp;;84#&amp;"
              >${t("showPhone")}</button>
            </span>
          </div>
          <div>
            ${t("email")}
            <span id="emailcontainer">
              <button
                type="button"
                class="js-reveal-code cursor-pointer underline"
                data-type="email"
                data-add="946052"
                data-code=";250649#&amp;;901#&amp;;250649#&amp;;111#&amp;;250649#&amp;;99#&amp;;250649#&amp;;64#&amp;;250649#&amp;;801#&amp;;250649#&amp;;501#&amp;;250649#&amp;;79#&amp;;250649#&amp;;901#&amp;;250649#&amp;;301#&amp;;250649#&amp;;46#&amp;;250649#&amp;;011#&amp;;250649#&amp;;501#&amp;;250649#&amp;;801#&amp;;250649#&amp;;411#&amp;;250649#&amp;;101#&amp;;250649#&amp;;89#&amp;;250649#&amp;;64#&amp;;250649#&amp;;411#&amp;;250649#&amp;;101#&amp;;250649#&amp;;401#&amp;;250649#&amp;;611#&amp;;250649#&amp;;101#&amp;;250649#&amp;;301#&amp;;250649#&amp;;111#&amp;;250649#&amp;;611#&amp;;250649#&amp;;64#&amp;;250649#&amp;;411#&amp;;250649#&amp;;101#&amp;;250649#&amp;;611#&amp;;250649#&amp;;611#&amp;;250649#&amp;;101#&amp;;250649#&amp;;89#&amp;"
              >${t("showEmail")}</button>
            </span>
          </div>
          <p>
            ${t("website")}
            <a class="underline" href="http://better-together-dj.com/">http://better-together-dj.com/</a>
          </p>
        </div>

        <div class="mb-4">
          <div>${t("responsibleContent")}</div>
          <div class="flex place-content-around">
            <div>
              <div>${t("mr")} Jonathan Loske</div>
              <div>Bismarckstr. 78</div>
              <div>10627 Berlin</div>
              <div>${t("country")}</div>
            </div>
            <div>
              <div>${t("mrs")} Vera Loske</div>
              <div>Bismarckstr. 78</div>
              <div>10627 Berlin</div>
              <div>${t("country")}</div>
            </div>
          </div>
        </div>

        <p>
          ${t("disputeResolution")}
          <a class="underline" href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE">ec.europa.eu/consumers/odr</a>
        </p>

        <p>${t("disputeParticipation")}</p>
      </div>
    </div>
  </div>
</div>`;
}
