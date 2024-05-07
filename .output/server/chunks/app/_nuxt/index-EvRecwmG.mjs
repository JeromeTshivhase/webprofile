import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { resolveComponent, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
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

const _imports_0$1 = "" + buildAssetsURL("hero2.Ce6P4gh2.jpg");
const _sfc_main$4 = {
  // Your component logic goes here
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-a8cec638><div class="relative bg-gray-400 min-h-screen text-white overflow-hidden" data-v-a8cec638><div class="absolute inset-0 overflow-hidden" data-v-a8cec638><img${ssrRenderAttr("src", _imports_0$1)} alt="Background Image" class="object-cover object-center w-full h-full zoom-animation" data-v-a8cec638><div data-v-a8cec638></div></div><div class="relative py-52 flex flex-col justify-center items-center text-center px-5" data-v-a8cec638><h5 class="text-3xl font-extralight" data-v-a8cec638>Welcome</h5><h1 class="mt-3 text-6xl font-extralight leading-tight mb-4" data-v-a8cec638>I&#39;m <span class="text-teal-400" data-v-a8cec638>Ndiene</span> Tshivhase </h1><div class="bg-teal-400 rounded-full" data-v-a8cec638><p class="text-lg inline-block px-4 py-2 font-semibold" data-v-a8cec638>Diploma in IT | Software Development &amp; Web Developer | Data Scientist</p></div><div class="flex space-x-4" data-v-a8cec638><a href="#" class="text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out" data-v-a8cec638><i class="fab fa-facebook-f" data-v-a8cec638></i></a><a href="#" class="text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out" data-v-a8cec638><i class="fab fa-twitter" data-v-a8cec638></i></a><a href="#" class="text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out" data-v-a8cec638><i class="fab fa-instagram" data-v-a8cec638></i></a></div></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-a8cec638"]]);
const _imports_0 = "" + buildAssetsURL("Me.BH1M-0n5.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "bg-gray-100",
    id: "about-section"
  }, _attrs))}><div class="container mx-auto py-16 px-4 sm:px-6"><div class="grid grid-cols-1 md:grid-cols-2 items-center"><div class="md:mt-0"><img${ssrRenderAttr("src", _imports_0)} alt="Me" class="object-cover transform scale-125"></div><div class="max-w-lg"><h2 class="text-4xl font-light text-gray-600 sm:text-4xl py-3">Ndiene Tshivhase</h2><h5 class="font-semibold text-teal-500">Diploma in IT | Software Development &amp; Business Analysis | Data Science Internship</h5><p class="mt-4 text-gray-600 text-lg">A passionate data scientist and aspiring web developer. With a background in software development and a diploma in Information Technology Software Development from Vaal University of Technology, I&#39;ve combined my skills to create data-driven insights and engaging web experiences. My data science internship experience has honed my ability to derive meaningful insights from complex datasets. Simultaneously, my interest in web development fuels my drive to craft user-friendly and visually appealing online platforms.Let&#39;s connect the dots between data science and web development,creating immersive experiences that empower users and drive innovation. Join me on this exciting journey!.</p><div class="py-3"><button href="#" class="bg-teal-500 hover:bg-teal-600 font-semibold text-lg text-white inline-block px-10 py-3 rounded-full">Download CV</button></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "bg-gray-100 bottom-0 left-0 right-0 bg-gradient-to-t from-gray-100 via-gray-200 to-transparent text-gray-600 py-20 px-10",
    id: "skills-section"
  }, _attrs))}><div class="container py-5"><h1 class="text-center font-normal text-3xl mb-5">My Skills</h1><div class="grid grid-cols-1 sm:grid-cols-2 py-3"><div class="px-4 text-[20px]"><h4>Coding skills</h4><div class="progress-wrapper"><span class="caption">JavaScript</span><div class="progress bg-white rounded-full"><div class="progress-bar bg-teal-400 borde" style="${ssrRenderStyle({ "width": "66%" })}">66%</div></div></div><div class="progress-wrapper"><span class="caption">Java</span><div class="progress bg-white rounded-full"><div class="progress-bar bg-teal-400" style="${ssrRenderStyle({ "width": "70%" })}">70%</div></div></div><div class="progress-wrapper"><span class="caption">HTML + CSS</span><div class="progress bg-white rounded-full"><div class="progress-bar bg-teal-400" style="${ssrRenderStyle({ "width": "85%" })}">85%</div></div></div><div class="progress-wrapper"><span class="caption">Python</span><div class="progress bg-white rounded-full"><div class="progress-bar bg-teal-400" style="${ssrRenderStyle({ "width": "70%" })}">70%</div></div></div></div><div class="px-4 text-[20px]"><h4>Data Science Skills</h4><div class="progress-wrapper"><span class="caption">Machine Learning</span><div class="progress bg-white rounded-full"><div class="progress-bar bg-teal-400" style="${ssrRenderStyle({ "width": "62%" })}">62%</div></div></div><div class="progress-wrapper"><span class="caption">Data Visualization</span><div class="progress bg-white rounded-full"><div class="progress-bar bg-teal-400" style="${ssrRenderStyle({ "width": "69%" })}">69%</div></div></div><div class="progress-wrapper"><span class="caption">Tableau &amp; Power BI</span><div class="progress bg-white rounded-full"><div class="progress-bar bg-teal-400" style="${ssrRenderStyle({ "width": "79%" })}">79%</div></div></div></div></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Skills.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Skills = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "experience-section" }, _attrs))}><div class="font-normal text-gray-600"><div class="bg-white lg:flex"><div class="lg:w-1/2"><div class="max-w-xl mx-auto p-8"><div class="flow-root"><div class="text-3xl text-center py-5"><h1>Education</h1></div><ul class="-mb-8"><li><div class="relative pb-8"><span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span><div class="relative flex items-start space-x-3"><div><div class="relative px-1"><div class="h-8 w-8 bg-teal-400 rounded-full ring-8 ring-white flex items-center justify-center"><svg class="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></div></div></div><div class="min-w-0 flex-1 bg-slate-100 border shadow-xl border-gray-100 rounded-lg py-5 px-3"><div class="text-md text-gray-500"><div><a href="#" class="font-medium text-gray-900 mr-2">2018 - 2022</a><a href="#" class="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-[16px]"><div class="absolute flex-shrink-0 flex items-center justify-center"><span class="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true"></span></div><div class="ml-3.5 font-medium text-gray-900">Diploma in Information Technology</div></a></div><span class="whitespace-nowrap text-teal-400">Vaal University of Technology</span></div><div class="mt-2 text-gray-700"><ol><li>Software Development</li></ol><ol><li>Busines Analyst</li></ol></div></div></div></div></li><li><div class="relative pb-8"><span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span><div class="relative flex items-start space-x-3"><div><div class="relative px-1"><div class="h-8 w-8 bg-teal-400 rounded-full ring-8 ring-white flex items-center justify-center"><svg class="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></div></div></div><div class="min-w-0 flex-1 bg-slate-100 border shadow-xl border-gray-100 rounded-lg py-5 px-3"><div class="text-md text-gray-500"><div><a href="#" class="font-medium text-gray-900 mr-2">2012 - 2017</a><a href="#" class="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-[16px]"><div class="absolute flex-shrink-0 flex items-center justify-center"><span class="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true"></span></div><div class="ml-3.5 font-medium text-gray-900">National Senior Certificate</div></a></div><span class="whitespace-nowrap text-teal-400">Lucas Ratshalingwa Secondary School</span></div><div class="mt-2 text-gray-700"><ol class="list-disc ml-3"><li>Grade 12</li></ol></div></div></div></div></li><li><div class="text-3xl text-center py-5"><h1>Certificates</h1></div><div class="relative pb-8"><span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span><div class="relative flex items-start space-x-3"><div><div class="relative px-1"><div class="h-8 w-8 bg-teal-400 rounded-full ring-8 ring-white flex items-center justify-center"><svg class="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></div></div></div><div class="min-w-0 flex-1 bg-slate-100 border shadow-xl border-gray-100 rounded-lg py-5 px-3"><div class="text-md text-gray-500"></div><div class="mt-2 text-gray-700"><ol><li class="mb-4"><div><a href="#" class="font-medium text-gray-900 mr-2">Issued: 2022 July</a><a href="#" class="my-0.5 relative inline-flex items-center rounded-full py-0.5 text-[16px]"><div class="absolute flex-shrink-0 flex items-center justify-center"></div><div class="font-medium text-gray-900"> Data Science with Python</div></a></div><small class="block mb-2"><a href="https://certificates.simplicdn.net/share/thumb_3654681_1660291857.png" class="text-blue-500 hover:text-blue-700">Show Credential</a></small><hr class="mb-4"></li><li class="mb-4"><div><a href="#" class="font-medium text-gray-900 mr-2">Issued: 2022 July</a><a href="#" class="my-0.5 relative inline-flex items-center py-0.5 text-[16px]"><div class="absolute flex-shrink-0 flex items-center justify-center"></div><div class="font-medium text-gray-900"> Machine Learning</div></a></div><small class="block mb-2"><a href="#" class="text-blue-500 hover:text-blue-700">Show credential</a></small><hr class="mb-4"></li><li class="mb-4"><div><a href="#" class="font-medium text-gray-900 mr-2">Issued:2022 August </a><a href="#" class="my-0.5 relative inline-flex items-center rounded-full py-0.5 text-[16px]"><div class="absolute flex-shrink-0 flex items-center justify-center"></div><div class="font-medium text-gray-900">Deep Learning with Keras and Tensorflow</div></a></div><small class="block mb-2"><a href="https://certificates.simplicdn.net/share/thumb_3863962.png" class="text-blue-500 hover:text-blue-700">Show Credential</a></small><hr class="mb-4"></li><li class="mb-4"><div><a href="#" class="font-medium text-gray-900 mr-2">Issued: 2022 August</a><a href="#" class="my-0.5 relative inline-flex items-center py-0.5 text-[16px]"><div class="absolute flex-shrink-0 flex items-center justify-center"></div><div class="font-medium text-gray-900">Tableau Certification Training</div></a></div><small class="block mb-2"><a href="https://certificates.simplicdn.net/share/thumb_3928147.png" class="text-blue-500 hover:text-blue-700">Show Credential</a></small><hr class="mb-4"></li><li class="mb-4"><div><a href="#" class="font-medium text-gray-900 mr-2">Issued: October 2021</a><a href="#" class="my-0.5 relative inline-flex items-center py-0.5 text-[16px]"><div class="absolute flex-shrink-0 flex items-center justify-center"></div><div class="font-medium text-gray-900">Getting Started with Data Science</div></a></div><small class="block mb-2"><a href="https://www.credly.com/badges/9d9058b3-5158-4df7-9393-721fe7e8150e?source=linked_in_profile" class="text-blue-500 hover:text-blue-700">Show credential</a></small><hr class="mb-4"></li></ol></div></div></div></div></li></ul></div></div></div><div class="lg:w-1/2"><div class="max-w-xl mx-auto p-8"><div class="flow-root"><div class="text-3xl text-center py-5"><h1>Experience</h1></div><ul class="-mb-8"><li><div class="relative pb-8"><span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span><div class="relative flex items-start space-x-3"><div><div class="relative px-1"><div class="h-8 w-8 bg-teal-400 rounded-full ring-8 ring-white flex items-center justify-center"><svg class="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></div></div></div><div class="min-w-0 flex-1 bg-slate-100 border shadow-xl border-gray-100 rounded-lg py-5 px-3"><div class="text-md text-gray-500"><div><a href="#" class="font-medium text-gray-900 mr-2">1 Year</a><a href="#" class="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-[16px]"><div class="absolute flex-shrink-0 flex items-center justify-center"><span class="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true"></span></div><div class="ml-3.5 font-medium text-gray-900">Data Science Internship</div></a></div><span class="whitespace-nowrap text-teal-400">Deviare - Remote</span></div><div class="mt-2 text-gray-700"><ol class="list-disc ml-3"><li>Completed capstone project on Comcast consumer complaints.</li><li>Analyzed data using tools such as pandas, NumPy, matplotlib, and seaborn.</li><li>Created trend charts to visualize patterns and insights from the data.</li><li>Developed an interactive Tableau dashboard to present the findings.</li><li>Demonstrated proficiency in data analysis, data visualization, and dashboard creation.</li></ol></div></div></div></div></li><li><div class="relative pb-8"><span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span><div class="relative flex items-start space-x-3"><div><div class="relative px-1"><div class="h-8 w-8 bg-teal-400 rounded-full ring-8 ring-white flex items-center justify-center"><svg class="text-white h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></div></div></div><div class="min-w-0 flex-1 bg-slate-100 border shadow-xl border-gray-100 rounded-lg py-5 px-3"><div class="text-md text-gray-500"><div><a href="#" class="font-medium text-gray-900 mr-2">6 Months</a><a href="#" class="my-0.5 relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-[16px]"><div class="absolute flex-shrink-0 flex items-center justify-center"><span class="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true"></span></div><div class="ml-3.5 font-medium text-gray-900">Data Science Internship</div></a></div><span class="whitespace-nowrap text-teal-400">Socian Ltd - Remote</span></div><div class="mt-2 text-gray-700"><ol class="list-disc ml-3"><li><b>AI Chatbot for High Traffic Support:</b> Built an independent AI chatbot for managing heavy inbound traffic. Enabled real-time responses to FAQs using NLP, streamlining customer support.</li><li><b>NLP-Driven Efficiency:</b> Employed NLP to interpret queries and provide coherent responses, enhancing user interactions.</li><li><b>Seamless Multi-Channel Solution:</b> Integrated chatbot across platforms, handling peak traffic with quick response times.</li><li><b>Technical Problem-Solver:</b> Demonstrated strong initiative and adept problem-solving in NLP and data processing.</li><li><b>Innovative AI Application:</b> Applied advanced AI to revolutionize user engagement and satisfaction.</li></ol></div></div></div></div></li></ul></div></div></div></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Experience.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Experience = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContactUs = resolveComponent("ContactUs");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Home, null, null, _parent));
      _push(ssrRenderComponent(About, null, null, _parent));
      _push(ssrRenderComponent(Skills, null, null, _parent));
      _push(ssrRenderComponent(Experience, null, null, _parent));
      _push(ssrRenderComponent(_component_ContactUs, null, null, _parent));
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
//# sourceMappingURL=index-EvRecwmG.mjs.map
