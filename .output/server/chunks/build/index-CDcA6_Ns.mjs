import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { useSSRContext, ref, mergeProps, resolveComponent, withCtx, createVNode } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { C as ContactUs } from './contactus-CDHv6TNh.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'nodemailer';
import '@dword-design/functions';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0$4 = "" + buildAssetsURL("slide1.C36UztLX.jfif");
const _imports_1$4 = "" + buildAssetsURL("slide3.CEqGSvto.jpg");
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><section class="bg-black min-h-[70vh]" id="about-section"><div class="container px-4 py-16 mx-auto sm:px-6 lg:px-8"><h1 class="mb-5 mt-7 text-center text-3xl font-bold text-[#DAC558] md:mt-10 md:text-4xl lg:text-5xl">Who are we</h1><div class="grid items-center grid-cols-1 md:grid-cols-2"><div class="min-w-[538px]"><p class="text-white text-[20px]">OL Afrika Media Foundation is a black, female, and youth-run NPO established in 2017. Our work includes production opportunities and careers that support the media industry such as Music Video Production, Film and TV Production, Co-Production, Content Distribution, Photography, Drone Pilot Services, Live Streaming, and also offer Accredited Skills Development and Training. We&#39;re the first youth-run organization in the country to be funded by MICTSETA to run a film and TV Learnership in 2019</p></div><div class="mt-0 md:mt-5"><img${ssrRenderAttr("src", _imports_0$4)} alt="About Us Image" class="rounded-lg shadow-md"></div></div></div></section><section class="relative min-h-[70vh] bg-black"><div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8"><img${ssrRenderAttr("src", _imports_1$4)} alt="Background Image" class="absolute inset-0 z-0 h-full w-full object-cover object-center"><h1 class="relative z-10 mb-5 mt-7 text-center text-3xl font-bold text-[#DAC558] md:mt-10 md:text-4xl lg:text-5xl">Our Founder: Mpho Ntlatleng</h1><div class="relative z-10 text-white"><p class="text-[20px]">MPHO \u201CBoss Lady\u201D NTLATLENG, Media Practitioner who has worked in the Media industry since 2012: subtitling, script translating for programs such as Khumbulel\u2019khaya, Please Step In, and many more. She got involved in the advocacy of the media industry in 2013 when she was handpicked by the former SABC CEO Hlaudi Motsoeneng From there, she served under SAACYF as Provincial Secretary then National Secretary a year late.</p><p class="text-[20px]"><br>She then stepped down to register OL Afrika however still active in the Activism of the Arts; Serving as the former MEC of Arts &amp; Culture Faith Mzibukon Task Team member, Minister Nathi Mthethwa Audio Visual Reference Group Member and was also elected as the Pilot Curriculum for MICTSETA managed by Gugu Sema. She has served as youth representative PTT leading the creative Industry Federation (CCIFSA) to its 2nd Elective conference. Currently the newly elected Ward Committee Member for Ward 60 (Joburg Inner City) for Youth, sports Art &amp; Culture and also serving in Communications for Greater Joburg Region under ruling party.</p></div></div></section><section class="bg-black min-h-[70vh]"><div class="container px-4 py-16 mx-auto sm:px-6 lg:px-8"><h1 class="mb-5 mt-7 text-center text-3xl font-bold text-[#DAC558] md:mt-10 md:text-4xl lg:text-5xl">Mission and Vision</h1><div class="mx-auto md:mx-20"><p class="justify-center text-white text-[20px]"><span class="font-bold text-[#DAC558]">Mission:</span> To improve the quality of life for underserved communities through philanthropic initiatives, strategic partnerships, and innovative solutions. We aim to address pressing social and environmental challenges while fostering sustainable change</p><p class="justify-center text-white text-[20px]"><br><span class="font-bold text-[#DAC558]">Vision:</span> Is to create a world where every individual has equal access to opportunities, resources, and a sustainable environment. We aspire to be a catalyst for positive change, shaping a brighter and more equitable future for generations to come</p></div></div></section><!--]-->`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/aboutus.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Aboutus = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_1$3 = "" + buildAssetsURL("slide2.BPUwPg1-.jfif");
const _sfc_main$6 = {
  __name: "slider",
  __ssrInlineRender: true,
  setup(__props) {
    const activeSlide = ref(0);
    const indicators = [
      { position: 0, active: true },
      { position: 1, active: false }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "home-section",
        class: "relative w-full",
        "data-carousel": "static"
      }, _attrs))}><div class="relative overflow-hidden rounded-lg bg-black min-h-screen"><div class="${ssrRenderClass([{ "hidden": activeSlide.value !== 0 }, "duration-700 ease-in-out"])}" data-carousel-item="active"><img${ssrRenderAttr("src", _imports_0$4)} class="absolute -translate-x-1/3 -translate-y-1/2 top-1/2 left-1/2" alt="slide_1"><div class="relative transform overflow-hidden px-4 py-40 md:px-24"><h1 class="text-3xl font-bold text-[#4D4D4D] md:text-4xl lg:text-5xl xl:text-6xl">OL Afrika<br><span class="bg-gradient-to-r from-[#DAC558] to-[#35301a] bg-clip-text text-transparent">Media Foundation</span></h1><p class="mt-3 font-light text-white">Explore Our Creative Work</p><a class="mt-3 inline-flex items-center justify-center gap-x-3 rounded bg-[#DAC558] px-4 py-3 text-center text-sm font-medium text-black hover:text-[#5e531f]" href="#">Get Started</a></div></div><div class="${ssrRenderClass([{ "hidden": activeSlide.value !== 1 }, "duration-700 ease-in-out"])}" data-carousel-item><img${ssrRenderAttr("src", _imports_1$3)} class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="slide_2"><div class="relative transform overflow-hidden px-4 py-40 md:px-24"><h1 class="text-3xl font-bold text-[#4D4D4D] md:text-4xl lg:text-5xl xl:text-6xl"> OL Afrika<br><span class="bg-gradient-to-r from-[#DAC558] to-[#35301a] bg-clip-text text-transparent">Media Foundation</span></h1><p class="mt-3 font-light text-white">Explore Our Creative Work</p><a class="mt-3 inline-flex items-center justify-center gap-x-3 rounded bg-[#DAC558] px-4 py-3 text-center text-sm font-medium text-black hover:text-[#5e531f]" href="#">Get Started</a></div></div></div><div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2"><!--[-->`);
      ssrRenderList(indicators, (indicator, index) => {
        _push(`<button type="button" class="${ssrRenderClass({
          "w-3 h-3 rounded-full": true,
          "bg-[#DAC558] dark:bg-[#DAC558]": indicator.active,
          "bg-[#DAC558]/50 dark:bg-[#DAC558]/50 hover:bg-[#DAC558] dark:bg-[#DAC558]": !indicator.active
        })}"${ssrRenderAttr("aria-current", indicator.active.toString())}${ssrRenderAttr("aria-label", "Slide " + (index + 1))} data-carousel-slide-to="index"></button>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/slider.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Slider = _sfc_main$6;
const _imports_0$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEk0lEQVR4nO2czYsURxjGf8SIrjCwuYj4EcXDGs+bWwTJSSEiMUEMBhJwA0IWzSkxIZroQchN48d/YCAxh0RQL35dVBS8JuQS2BU9+JU1G7xEpUPBO2QoununZ7q7qnueH9SyTFdXPe/7bHdPv129IIQQQgghhBBCCCGEEEKEZhw4DDwAHtrv7jNRMx3gAPAXkHhtHvgOeE2uhDUikTFxGpHImOqvEXM5CZ+zPv320zWmoiNiPuVaMeh+omQjfGTMkFSVwI6OmDiM8JExkSaooyMmzoR0ItERjFgT0IlUF6MecKchOkcuwE5Ddbc+oE7T42h8AG2Jq3GC2xpn9AJHJe7oBAUieB6CC4iU2vMiIyLJk4wYjNLzJiPKYeg8yohqGCiv7wd8Fv0qsAbYBOwCpoFvgBPAD8BF4CpwB/gDmLHguu1Zit5nXp8Z2/eOjXXRxj5hc03b3JtMy6KAawOcFzypwQiX+DeBKeAYcBmYBZ7nCEwCteem7bJpnTLtLoaqjXmM/ajCELffXuAX4GkEiU6GbE8tlr1D5iTPkEeu03sVnLI+s3Nj0tI2bzGWZUQ3zzuK7tCPMQcKBPYCuAdcB34ETtoc+4DdwBZgMzAJbADW2sWv28ZS5h/z+qy1fSdtrC029j6b66TNfd20vCig/4uSjMjMaxnGPMzYb9Yupl8C24D1wGLiY7Fp22Zanea7GTG5Rd5plPkHPvSAfr+vgAmaz4TF4sdXqRE+430ctv4EeYLbQJISX+VG5AlYaMJRM+Rw3fdxRQWMmiFJXUZkCSj6ekDbSBZolT+GyEtwP8a0jSSUEVkC0sgzpm0koYzIElD0W1nbSLxW+wtARRNcpL8r2L1uldYPrPL6rVftvVZitfdaH9XehYqIwf/gyjBkkZUuPgGON6jae9w0T/aU5RtvyLmCX5OTSJuL4dc2GNL21ipDilR7J1KqvUtT5l9aY7W30Yb8DZwHvga2N6Dau920njftjTXkwQKGHGyQIQeBCzmGZJXfozLk8wKH+0vgPnADOAucAo4A+4EPga3A23a6eQNY552OlqXMv8zrs872nbSxttrY+22uUzb3DdPysoB+F2vtDHKI6hFuhQx6zmzbIoe5EhY5lEIZF7HujeEeW1pzye6gY70xnDGNx0xz741hcMowJAsX5GrgLWAn8ClwCPgeOGMX1CtW9vgd+NMri6StbJn3+rh9frMxrtiYZ2yOQzbnTtOwOqbEhzBEDIAMiQwZEhkyJDJkSGTIkMiQIZEhQyJDhkSGDImEV6xM7Ruy27aJGhm35wNZBTj3uFP/kLgmXHHtZh9V0ZtNKMS1gY8LlKo/Ci12FLjtJd09B19lpekL3rZbocWOAv7yTGdElzXeNtdXVMwjL+lugUCXjWnvVYtqueol/WjPtqPeNvcETlTMlJf0f4AVwPKUR6buebOomDFbn9Sb+NPWej+7n/HivqiAaS/5/1rr/cz1ETWxxN6RyLr/mLU+okbeyTHk3TqFiP85m2LGT0pQOFZ4b9a6JaErA+oRVq9S7Soyfrb360QkLLcmhBBCCCGEEIJ28R/l4Tb/FQp99QAAAABJRU5ErkJggg==";
const _imports_1$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFB0lEQVR4nO2dW4hWVRTHfzZTjnaRsdQKDZRK1BgSH4wUfFCQ0MgLCN2kAqOH8FJBT6IgSjcSEbF5s6SHRouoEEQRQV/UKAqG6GFSjApRw6FRayYttqyBw/Z8M845+1zW+vYP9ssMnHX+a51z9lr77LM+iEQikUgkEolEIpGINiYDy4FtwCHgHHAW2AjcVvXJWec+4Clx9lfAH8B/Q4w3qz5hS9wNLADeAj4DfhnG+Wnjx6pFaOV2YBawGtgBfAtcyxAAf1ypWpgGWoEO4BVgtzi/P4fT+4BjwIfAsyn/j3g8CDwNbJZJty+H8weAbuATYB0wH7jDsxcD0sD5XwPncz5yejznj2F4mjYg48RJ68RpWSbd5PhdgrhZgjo+43k1RUDu8pzvHhvXAzp/YsBzNReQ1pSM598czu8FjsuxVsuxi8REQB4F3gdOBcp4tgPPAY8Ao0rWoj4g8zNmPv1y9+yWFLZD7q6qUR+Qo7fg/Gsyb+wBXgfmAqOpJ+oD0ltgxlMF6gPiC5iAbswFZBS6iQGpGTEgJePu4BnAS8BHwHfAX7Ky69L2GJCCuUdS87czro+po05zSEtilaBTUu2870XUUWVAHvCW5i/ndH4MyAhwS+fzgDeALtmIkNXJF4EDwCZgMdAuS//fxDukMQ8DLwA7gZM51sgGZOLeJY+y6UPcxVNiQG5enu+SrThZr/7kKsEiYCwjo+nmkJaAGxIGFyhDLs2bD8g4uVIHX8tezHn1dyVeybaVoEcdvoA5wFrgU3mnndX5vZI5bQGWyia3KvSoI1R62ZPYkDCnwm2cTRmQS3L113F53nxABqRi7kxMvHVeETYXkAHgS2AD8GRBE2+RmAvIy+jGXEDa0I25gGhHvR71AqzpUS/Amh71AqzpUS/Amh71AqzpUS/Amh71AqzpUS/Amh71AqzpUS/Amh71AqzpUS/Amh71ArzNeOr1qBdgfaOcZpZZ0KNeQIKPLehRL0CY0WD/sDrUCwAmAT+laFGpR7OAFmDlMK3+1KFFQBtwv3yOsAr4ADg9RCDqrqchdRAwRT7ifFf6K56UrakXgD9zdh5SR1UC2qW76M85nJ0cbkJ/R3tAqqps1zdo6ZFlXJYeLI/JsVUHpOzKtrVBrXAr46pM3i6bOix3w0r5fiWJ6oA8U7KAbQ2c/TdwUD7ifB54ApgmfVfaR7i5W3VAyqxsJwP/eLYuyMdB7hvFUKgNSNmV7QbPzm/A1AIeiUkb7ttHFVRR2R7x7Lg0t4j25P6jsNZUWdn2eHZcF4fQTPRsuA9Ua0PdKts+z467OEIz27PhngKloLGy7ffsFPFR6ArPhusnWRjaK9tez07IzGqQLZ4N19ajECxUtt2enUH7IfEbmL0Y2oClyna/Z8f9UEtIOlIe1aHTalOV7auenV/lXEPht2Y6QWCsVbbj5UJK2nJ37r0Bjr01RYdrdR4Ui5Xt9hTHnQHWAHdmvGj3phzzVBFptcXKdizwwxDtOr6QTHKJzAnT5LHWKgF7SPqovAbsa9AS0CU/M4s4eauV7STg+0AZoz9cu9iFRZ245cp2jPyIlz9H5hndoqcwzFW2Kbg58T2ZH7MG4rS0hCr81xpMVbbD4NL0x2Vu6JTsq1uyykuJuuq8/P1zaQ01t8y+XCYqW0uYqGwtob6ytYb6ytYiqitbi6iubK2itrK1jMrKthlQVdk2Eyoq20gkEolEIpFIhBv8DyUulYNrPMfmAAAAAElFTkSuQmCC";
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "pb-12 px-5 pt-28 lg:pb-[90px] lg:pt-[120px] min-h-screen container mx-auto my-16 items-center",
    id: "services-section"
  }, _attrs))}><h2 class="text-4xl font-bold mb-20 text-center text-dac55d drop-shadow-lg">Opportunities</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"><div class="card-container"><div class="card bg-[#dac55d] rounded-lg shadow-md"><div class="card-inner p-10 flex flex-col items-center justify-between"><svg class="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"></path></svg><h3 class="text-xl text-center font-bold mb-4">Film &amp; TV Production</h3></div><div class="back p-10 flex flex-col items-center justify-between"><p class="text-gray-700 text-center"> We offer professional film and television production services, from concept development and scriptwriting to filming, editing, and post-production. </p></div></div></div><div class="card-container"><div class="card bg-[#dac55d] rounded-lg shadow-md"><div class="card-inner p-10 flex flex-col items-center justify-between"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"></path></svg><h3 class="text-xl text-center font-bold mb-4">Broadcasting Services</h3></div><div class="back p-10 flex flex-col items-center justify-between"><p class="text-gray-700 text-center"> Our organization offers live broadcasting services for events, conferences, and more. </p></div></div></div><div class="card-container"><div class="card bg-[#dac55d] rounded-lg shadow-md"><div class="card-inner p-10 flex flex-col items-center justify-between"><div><img class="mx-auto flex h-16 w-16 items-center justify-center"${ssrRenderAttr("src", _imports_0$3)} alt="Tao Careers Icon - Volunteer Four Hands Icon, HD Png"></div><h3 class="text-xl text-center font-bold mb-4">Unemployed Graduate Internships</h3></div><div class="back p-10 flex flex-col items-center justify-between"><p class="text-gray-700 text-center"> These internships offer practical, on-the-job training and mentorship, enabling participants to gain valuable work experience and enhance their employability in the competitive job market. </p></div></div></div><div class="card-container"><div class="card bg-[#dac55d] rounded-lg shadow-md"><div class="card-inner p-10 flex flex-col items-center justify-between"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"></path></svg><h3 class="text-xl text-center font-bold mb-4">Photography &amp; Videography Services</h3></div><div class="back p-10 flex flex-col items-center justify-between"><p class="text-gray-700 text-center"> We provide professional photography and videography services for a variety of purposes, including events, corporate projects, promotional campaigns, and more </p></div></div></div><div class="card-container"><div class="card bg-[#dac55d] rounded-lg shadow-md"><div class="card-inner p-10 flex flex-col items-center justify-between"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"></path></svg><h3 class="text-xl text-center font-bold mb-4">Drone Pilot Services</h3></div><div class="back p-10 flex flex-col items-center justify-between"><p class="text-gray-700 text-center"> Subsidizing drone pilot services to capture high-quality earial footage for documentaries, or promotional material </p></div></div></div><div class="card-container"><div class="card bg-[#dac55d] rounded-lg shadow-md"><div class="card-inner p-4 flex flex-col items-center justify-between"><div><img class="mx-auto h-12 w-12 mb-2"${ssrRenderAttr("src", _imports_1$2)} alt="Video Icon"><h3 class="text-lg text-center font-bold mb-2">Subsidized Music Video Production</h3></div></div><div class="back p-4 flex flex-col justify-between"><p class="text-sm text-gray-700 text-center"> We offer subsidized music video production services to support emerging artists in bringing their musical visions to life. Through our affordable production packages, artists receive professional-grade music videos that help elevate their brand and reach a wider audience. </p></div></div></div><div class="card-container"><div class="card bg-[#dac55d] rounded-lg shadow-md"><div class="card-inner p-10 flex flex-col items-center justify-between"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"></path></svg><h3 class="text-xl text-center font-bold mb-4">Emerging Filmmaker co-Production</h3></div><div class="back p-10 flex flex-col items-center justify-between"><p class="text-gray-700 text-center">We collaborate with emerging filmmakers to coproduce innovative and engaging film projects. we empower emerging talents to realize their creative visions and showcase their work on a broader platform. Live </p></div></div></div><div class="card-container"><div class="card bg-[#dac55d] rounded-lg shadow-md"><div class="card-inner p-10 flex flex-col items-center justify-between"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg><h3 class="text-xl text-center font-bold mb-4">Accredited Skills Development &amp; Training</h3></div><div class="back p-10 flex flex-col items-center justify-between"><p class="text-gray-700 text-center"> We offer accredited skills development and training programs designed to equip individuals with the necessary skills and knowledge to thrive in any industry. </p></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/services.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Services = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$2 = "" + buildAssetsURL("img1.DuGBHA7l.jpg");
const _sfc_main$4 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "bg-black pt-20 lg:pb-[90px] lg:pt-[35px] min-h-screen",
    id: "program-section"
  }, _attrs))}><div class="py-16 bg-gradient-to-r from-[#DAC558] to-[#35301a] bg-clip-text text-transparent"><h1 class="text-4xl font-bold mb-1 text-center">Our Programs</h1></div><div class="py-1 px-10 mb-28">`);
  _push(ssrRenderComponent(_component_swiper, {
    modules: $setup.modules,
    "slides-per-view": 4,
    "space-between": -20,
    navigation: "",
    pagination: { clickable: true },
    onSwiper: $setup.onSwiper,
    onSlideChange: $setup.onSlideChange,
    breakpoints: {
      320: { slidesPerView: 1, slidesPerGroup: 1 },
      480: { slidesPerView: 1, slidesPerGroup: 1 },
      640: { slidesPerView: 2, slidesPerGroup: 1 },
      768: { slidesPerView: 2, slidesPerGroup: 1 },
      1024: { slidesPerView: 3, slidesPerGroup: 1 },
      1280: { slidesPerView: 3, slidesPerGroup: 1 },
      1536: { slidesPerView: 4, slidesPerGroup: 1 }
    }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="p-20 text-white"${_scopeId2}><div class="pl-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2018</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0$2)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-sm"${_scopeId2}></div><p${_scopeId2}>GFC SCRIPTWRITING SKILLS PROGRAM</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "p-20 text-white" }, [
                  createVNode("div", { class: "pl-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2018")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0$2,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-sm" }),
                      createVNode("p", null, "GFC SCRIPTWRITING SKILLS PROGRAM")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="max-w-md p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2019/2020</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0$2)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>MICTSETA FILM &amp; TV NQF 5 LEARNERSHIP</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "max-w-md p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2019/2020")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0$2,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "MICTSETA FILM & TV NQF 5 LEARNERSHIP")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2021</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0$2)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>GFC SCRIPTWRITING SKILLS PROGRAM</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2021")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0$2,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "GFC SCRIPTWRITING SKILLS PROGRAM")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="max-w-md p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2021</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0$2)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>NFVF PESP FILM &amp; TV INTERNSHIP</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "max-w-md p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2021")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0$2,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "NFVF PESP FILM & TV INTERNSHIP")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="max-w-md p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2021</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0$2)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>COJ WORK READINESS TRAINING</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "max-w-md p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2021")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0$2,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "COJ WORK READINESS TRAINING")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="max-w-md p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2022</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0$2)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>NFVF SCRIPTWRITING SKILLS PROGRAM</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "max-w-md p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2022")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0$2,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "NFVF SCRIPTWRITING SKILLS PROGRAM")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="max-w-md p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2022/2023</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0$2)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>NYS (AFRIKA TIKKUN) SCRIPT DEVELOPMENT PROGRAM</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "max-w-md p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2022/2023")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0$2,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "NYS (AFRIKA TIKKUN) SCRIPT DEVELOPMENT PROGRAM")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="max-w-md p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2023</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0$2)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>FASSET INTERNSHIP</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "max-w-md p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2023")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0$2,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "FASSET INTERNSHIP")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="max-w-md p-20 text-white"${_scopeId2}><div class="p-1.5"${_scopeId2}><div class="mb-5 text-center"${_scopeId2}><h1${_scopeId2}>2024</h1></div><img class="h-60 w-96 mb-2 rounded-full"${ssrRenderAttr("src", _imports_0$2)} alt="Image"${_scopeId2}><div class="text-center"${_scopeId2}><div class="mb-4 text-lg font-bold"${_scopeId2}></div><p${_scopeId2}>CATHSSETA INTERNSHIP</p></div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "max-w-md p-20 text-white" }, [
                  createVNode("div", { class: "p-1.5" }, [
                    createVNode("div", { class: "mb-5 text-center" }, [
                      createVNode("h1", null, "2024")
                    ]),
                    createVNode("img", {
                      class: "h-60 w-96 mb-2 rounded-full",
                      src: _imports_0$2,
                      alt: "Image"
                    }),
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", { class: "mb-4 text-lg font-bold" }),
                      createVNode("p", null, "CATHSSETA INTERNSHIP")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "p-20 text-white" }, [
                createVNode("div", { class: "pl-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2018")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0$2,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-sm" }),
                    createVNode("p", null, "GFC SCRIPTWRITING SKILLS PROGRAM")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "max-w-md p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2019/2020")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0$2,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "MICTSETA FILM & TV NQF 5 LEARNERSHIP")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2021")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0$2,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "GFC SCRIPTWRITING SKILLS PROGRAM")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "max-w-md p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2021")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0$2,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "NFVF PESP FILM & TV INTERNSHIP")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "max-w-md p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2021")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0$2,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "COJ WORK READINESS TRAINING")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "max-w-md p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2022")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0$2,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "NFVF SCRIPTWRITING SKILLS PROGRAM")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "max-w-md p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2022/2023")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0$2,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "NYS (AFRIKA TIKKUN) SCRIPT DEVELOPMENT PROGRAM")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "max-w-md p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2023")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0$2,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "FASSET INTERNSHIP")
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "max-w-md p-20 text-white" }, [
                createVNode("div", { class: "p-1.5" }, [
                  createVNode("div", { class: "mb-5 text-center" }, [
                    createVNode("h1", null, "2024")
                  ]),
                  createVNode("img", {
                    class: "h-60 w-96 mb-2 rounded-full",
                    src: _imports_0$2,
                    alt: "Image"
                  }),
                  createVNode("div", { class: "text-center" }, [
                    createVNode("div", { class: "mb-4 text-lg font-bold" }),
                    createVNode("p", null, "CATHSSETA INTERNSHIP")
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ourprogram.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ourprogram = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] min-h-screen",
    id: "whyus-section"
  }, _attrs))}><div class="container mx-auto flex flex-wrap justify-center"><div class="w-full px-4"><div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20"><h2 class="text-dark mb-3 text-3xl font-bold leading-[1.2] sm:text-4xl md:text-[40px] dark:text-gray-800">what sets us apart ?</h2><br><p class="mb-3 text-lg text-dark-500 md:text-xl dark:text-dark-400">We&#39;re not just another media non-profit. We&#39;re 100% youth-owned and proud of it. But that&#39;s not all. While other NPOs might focus solely on content production, we&#39;re dierent. We&#39;re dedicated to oering unique skills development programs like undergraduate internships, Learnerships, internships, and Work-Integrated Learning (WIL).</p><p class="mb-3 text-lg text-dark-500 md:text-xl dark:text-dark-400">Our expertise in co-production, subsidized music video production, film, and television production, coupled with strategic content distribution, allows us to amplify diverse voices and stories, shedding light on issues that often go unnoticed.</p><p class="mb-3 text-lg text-dark-500 md:text-xl dark:text-dark-400">It&#39;s not just about what we do, it&#39;s why we do it. Our passion extends beyond content production; it&#39;s about giving people opportunities and lifting up individuals from diverse backgrounds. In an environment where access to such programs can be scarce, we&#39;re committed to making a dierence where education is the key to unlocking endless possibilities.</p></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/whyus.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Whyus = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$1 = "" + buildAssetsURL("Big_zulu.CJta6myk.jpg");
const _imports_1$1 = "" + buildAssetsURL("moonlight.Bd8OYvyS.jpg");
const _imports_2$1 = "" + buildAssetsURL("dondada.BFgVnsVm.jpg");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "pb-12 pt-28 lg:pb-[90px] lg:pt-[120px] min-h-screen",
    id: "ourwork-section"
  }, _attrs))}><div class="container mx-auto flex flex-wrap justify-center"><div class="w-full px-6"><div class="mx-auto mb-12 max-w-[510px] text-center lg:mb-20"><h2 class="mb-3 text-3xl font-bold text-[#DAC558] sm:text-4xl md:text-[40px] drop-shadow-lg">Our Work</h2></div><div class="flex w-full items-center px-4 md:min-w-3 lg:min-w-3"><a href="https://www.youtube.com/watch?v=LfWCqZvimul" target="_blank"><div class="flex w-40 items-center justify-center overflow-hidden rounded-full shadow-lg shadow-gray-500"><img${ssrRenderAttr("src", _imports_0$1)} alt="Big Zulu Thumbnail" class="h-full w-full object-contain"></div></a><div class="ml-5"><a href="https://www.youtube.com/watch?v=LfWCqZvimul" target="_blank" class="font-bold text-blue-500">Watch Now</a><p class="mt-1">Big Zulu ft. Kwesta (Music Video)</p></div></div><div class="flex w-full items-center px-4 md:min-w-3 lg:min-w-3"><a href="https://www.youtube.com/watch?v=LfWCqZvimul" target="_blank"><div class="mt-8 flex w-40 items-center justify-center overflow-hidden rounded-full shadow-lg shadow-gray-500"><img${ssrRenderAttr("src", _imports_1$1)} alt="Moonlight Thumbnail" class="h-full w-full object-contain"></div></a><div class="ml-5"><a href="https://www.youtube.com./watch?v=G3r_R5lMOrQ&amp;t=6s" target="_blank" class="font-bold text-blue-500">Watch Now</a><p class="mt-1">Picture Perfect (Film Trailer) - To be Produced for Netflix 2023</p></div></div><div class="flex w-full items-center px-4 md:min-w-3 lg:min-w-3"><a href="https://www.youtube.com/watch?v=LfWCqZvimul" target="_blank"><div class="mt-8 flex w-40 items-center justify-center overflow-hidden rounded-full shadow-lg shadow-gray-500"><img${ssrRenderAttr("src", _imports_2$1)} alt="Don-Dada Thumbnail" class="h-full w-full object-contain"></div></a><div class="ml-5"><a href="https://www/youtube.com/watch?v=XhddBOgZKOc " target="_blank" class="font-bold text-blue-500">Watch Now</a><p class="mt-1">Don Dada (Music Video) - signed by Bob Marley Record Label Tuff Gong</p></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ourwork.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Ourwork = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "data:image/jpeg;base64,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";
const _imports_1 = "" + buildAssetsURL("2.DUGRO807.jpg");
const _imports_2 = "" + buildAssetsURL("3.CpYs_2Lc.jpg");
const _imports_3 = "" + buildAssetsURL("4.CFivIhFt.png");
const _imports_4 = "" + buildAssetsURL("5.BmqtlQyV.jpg");
const _imports_5 = "" + buildAssetsURL("6.DoZ5obEa.png");
const _imports_6 = "" + buildAssetsURL("7.CtdPzLUm.png");
const _imports_7 = "" + buildAssetsURL("8.E1iEjGb4.png");
const _imports_8 = "" + buildAssetsURL("9.Dfzkfr9a.jpg");
const _imports_9 = "" + buildAssetsURL("10.OzuucPr1.jpg");
const _imports_10 = "" + buildAssetsURL("11.DL5xdZpY.png");
const _imports_11 = "" + buildAssetsURL("12.C4hFtXHg.jpg");
const _imports_12 = "" + buildAssetsURL("13.Ca3_moWS.jpg");
const _imports_13 = "" + buildAssetsURL("14.BEjENbjC.png");
const _imports_14 = "" + buildAssetsURL("15.DtXxq21w.png");
const _imports_15 = "" + buildAssetsURL("16.WE-ZasdD.jpg");
const _imports_16 = "" + buildAssetsURL("17.kiQBoZ2m.jpg");
const _imports_17 = "" + buildAssetsURL("18.CFtXSsnH.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "mb-10 mt-10 bg-white py-5 sm:py-5" }, _attrs))} data-v-ae5137b1><div class="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]" data-v-ae5137b1><ul class="animate-infinite-scroll flex items-center justify-center md:justify-start [&amp;_img]:max-w-none [&amp;_li]:mx-8" data-v-ae5137b1><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_0)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_1)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_2)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_3)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_4)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_5)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_6)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_7)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_8)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_9)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_10)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_11)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_12)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_13)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_14)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_15)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_16)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li><li data-v-ae5137b1><img${ssrRenderAttr("src", _imports_17)} alt="" class="mx-4 flex w-[200px] items-center justify-center py-5 2xl:w-[300px]" data-v-ae5137b1></li></ul><ul class="animate-infinite-scroll flex items-center justify-center md:justify-start [&amp;_img]:max-w-none [&amp;_li]:mx-8" aria-hidden="true" data-v-ae5137b1></ul></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/marquee.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Marquee = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ae5137b1"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Slider, null, null, _parent));
      _push(ssrRenderComponent(Aboutus, null, null, _parent));
      _push(ssrRenderComponent(Services, null, null, _parent));
      _push(ssrRenderComponent(ourprogram, null, null, _parent));
      _push(ssrRenderComponent(Whyus, null, null, _parent));
      _push(ssrRenderComponent(Ourwork, null, null, _parent));
      _push(ssrRenderComponent(ContactUs, null, null, _parent));
      _push(ssrRenderComponent(Marquee, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CDcA6_Ns.mjs.map
