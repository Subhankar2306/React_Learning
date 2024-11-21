import React from "react";

function card({userName , degignation = "A Employee",bodyPart}) {
  console.log(userName);
  return (
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src="https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?ga=GA1.1.1741515847.1719564992&semt=ais_hybrid"
          alt="Butterfly"
          width="384"
          height="512"
        />
        <div class="pt-6 md text-center space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
             {bodyPart}
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">{userName}</div>
            <div class="text-slate-700 dark:text-slate-500">
              {degignation}
            </div>
          </figcaption>
        </div>
      </figure>
  );
}

export default card;
