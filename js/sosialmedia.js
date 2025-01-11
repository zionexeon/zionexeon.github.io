const socialMedias = [
  {
    url_image: "https://res.cloudinary.com/dnmkw2715/image/upload/v1668940546/zionexeonch/youtube-logo-png-2069_enobdv.png",
    nama_gambar: "Youtube",
    link: "https://www.youtube.com/@zionexeonch.1495",
    tombol: "Kunjungi",
  },
  {
    url_image: "https://res.cloudinary.com/dnmkw2715/image/upload/v1668940545/zionexeonch/logo-ig-png-32464_aofsjj.png",
    nama_gambar: "Instagram",
    link: "https://www.instagram.com/zionexeon.ch/",
    tombol: "Kunjungi",
  },
  {
    url_image: "https://res.cloudinary.com/dnmkw2715/image/upload/v1668940545/zionexeonch/512x512-logo-27148_bqm1kb.png",
    nama_gambar: "Github",
    link: "https://github.com/zionexeon",
    tombol: "Kunjungi",
  },
  {
    url_image: "https://res.cloudinary.com/dnmkw2715/image/upload/v1668940544/zionexeonch/linkedin-logo-png-1853_uiwfb7.png",
    nama_gambar: "LinkedIn",
    link: "https://www.linkedin.com/in/tresnanda-agsifa-cakra-buana-365492240/",
    tombol: "Kunjungi",
  },
];

function renderSocialMedias() {
  const grid = document.getElementById("social-media-grid");
  socialMedias.forEach((media) => {
    const mediaDiv = document.createElement("div");
    mediaDiv.className =
      "p-6 max-w-sm bg-slate-50 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-slate-300";
    mediaDiv.innerHTML = `
                    <div class="flex flex-col items-center">
                        <div class="mb-2">
                            <img src="${media.url_image}" alt="${media.nama_gambar}" class="w-40 h-40 object-contain" />
                        </div>
                        <h5 class="mb-2 text-center text-xl lg:text-2xl font-bold tracking-tight text-gray-900">${media.nama_gambar}</h5>
                        <div class="flex justify-center items-center">
                            <a href="${media.link}" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#614a93] rounded-lg hover:bg-[#3a2c58] focus:ring-4 focus:outline-none focus:ring-blue-300" target="_blank">
                                ${media.tombol}
                                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                `;
    grid.appendChild(mediaDiv);
  });
}

// Initial render
renderSocialMedias();
