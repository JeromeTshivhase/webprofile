<template>
  <section class="bg-gray-100 bottom-0 left-0 right-0 bg-gradient-to-t from-gray-100 via-gray-200 to-transparent text-gray-600 py-20 px-10" id="skills-section">
    <div class="container py-5">
      <h1 class="text-center font-normal text-3xl mb-5">My Skills</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 py-3">
        <div class="px-4 text-[20px]">
          <h4 class="my-5 font-semibold">Coding skills</h4>
          <div class="progress-wrapper">
            <span class="caption">JavaScript</span>
            <div class="progress bg-white rounded-full">
              <div class="progress-bar bg-teal-400" style="width: 66%;">66%</div>
            </div>
          </div>
          <div class="progress-wrapper">
            <span class="caption">Java</span>
            <div class="progress bg-white rounded-full">
              <div class="progress-bar bg-teal-400" style="width: 70%;">70%</div>
            </div>
          </div>
          <div class="progress-wrapper">
            <span class="caption">HTML + CSS</span>
            <div class="progress bg-white rounded-full">
              <div class="progress-bar bg-teal-400" style="width: 85%;">85%</div>
            </div>
          </div>
          <div class="progress-wrapper">
            <span class="caption">Python</span>
            <div class="progress bg-white rounded-full">
              <div class="progress-bar bg-teal-400" style="width: 70%;">70%</div>
            </div>
          </div>
          <div class="progress-wrapper">
            <span class="caption">Vue.js</span>
            <div class="progress bg-white rounded-full">
              <div class="progress-bar bg-teal-400" style="width: 90%;">90%</div>
            </div>
          </div>
          <div class="progress-wrapper">
            <span class="caption">Tailwind CSS</span>
            <div class="progress bg-white rounded-full">
              <div class="progress-bar bg-teal-400" style="width: 90%;">90%</div>
            </div>
          </div>
          <div class="progress-wrapper">
            <span class="caption">Version Control [GitHub]</span>
            <div class="progress bg-white rounded-full">
              <div class="progress-bar bg-teal-400" style="width: 90%;">90%</div>
            </div>
          </div>
          <div class="progress-wrapper">
            <span class="caption">Spring Boot</span>
            <div class="progress bg-white rounded-full">
              <div class="progress-bar bg-teal-400" style="width: 70%;">70%</div>
            </div>
          </div>
        </div>
        <div class="px-4 text-[20px]">
          <h4 class="my-5 font-semibold">Data Science Skills</h4>
          <div class="progress-wrapper">
            <span class="caption">Machine Learning</span>
            <div class="progress bg-white rounded-full">
              <div class="progress-bar bg-teal-400" style="width: 62%;">62%</div>
            </div>
          </div>
          <div class="progress-wrapper">
            <span class="caption">Data Visualization</span>
            <div class="progress bg-white rounded-full">
              <div class="progress-bar bg-teal-400" style="width: 69%;">69%</div>
            </div>
          </div>
          <div class="progress-wrapper">
            <span class="caption">Tableau & Power BI</span>
            <div class="progress bg-white rounded-full">
              <div class="progress-bar bg-teal-400" style="width: 79%;">79%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .progress-wrapper {
    margin-bottom: 1rem;
  }

  .progress {
    height: 1rem;
  }

  .progress-bar {
    font-size: 0.75rem;
    border-radius: 9px;
  }
</style>
