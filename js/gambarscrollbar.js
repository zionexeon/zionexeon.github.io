const images = [
  {
    src: "https://res.cloudinary.com/dnmkw2715/image/upload/v1668762438/zionexeonch/Mekar_Laser_Logo_2_ayg8i8.png",
    alt: "Mekar Laser",
    title: "Logo Mekar Laser",
  },
  {
    src: "https://res.cloudinary.com/dnmkw2715/image/upload/v1664627306/zionexeonch/bimahelm_elnswl.png",
    alt: "Bima Helm",
    title: "Website Bima Helm",
  },
  {
    title: "Logo SOFTDEV",
    alt: "Logo SOFTDEV",
    src: "https://res.cloudinary.com/dnmkw2715/image/upload/v1668762511/zionexeonch/SoftDev_Logo_3_gz5tmx.png",
  },
  {
    title: "Desain Baju",
    alt: "Desain Baju",
    src: "https://res.cloudinary.com/dnmkw2715/image/upload/v1668759743/zionexeonch/Mockup_Kemeja_2_zdh6ss.png",
  },
  {
    title: "Website Bina Cipta",
    alt: "Website Bina Cipta",
    src: "https://res.cloudinary.com/dnmkw2715/image/upload/v1667387758/zionexeonch/Screenshot_92_q7dy8a_b5ksan.png",
  },
  {
    title: "Website Smegamart",
    alt: "Website Smegamart",
    src: "https://res.cloudinary.com/dnmkw2715/image/upload/v1664857354/zionexeonch/smegamart_dtvtkr.png",
  },
  {
    title: "Website Softdev",
    alt: "Website Softdev",
    src: "https://res.cloudinary.com/dnmkw2715/image/upload/v1664627303/zionexeonch/softdev_hjq35i.png",
  },
  {
    title: "Website Mekar Laser",
    alt: "Website Mekar Laser",
    src: "https://res.cloudinary.com/dnmkw2715/image/upload/v1664627291/zionexeonch/akrilik_k3qlg8.png",
  },
  // Tambahkan gambar lain di sini
];

// Mengacak urutan gambar
images.sort(() => Math.random() - 0.5);

function createImageElement(image) {
  const container = document.createElement("div");
  container.className = "snap-start snap-always shrink-0";

  const card = document.createElement("div");
  card.className = "rounded shadow-md";

  const relativeDiv = document.createElement("div");
  relativeDiv.className = "relative";

  const hoverSpan = document.createElement("span");
  hoverSpan.className =
    "absolute inset-0 z-10 bg-black text-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300";

  const title = document.createElement("h1");
  title.className = "text-xs lg:text-xl tracking-wider font-bold";
  title.textContent = image.title;

  const imageDiv = document.createElement("div");
  imageDiv.className = "w-full flex flex-wrap content-center";

  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;
  img.className = "bg-none object-cover max-w-full h-64";

  hoverSpan.appendChild(title);
  imageDiv.appendChild(img);
  relativeDiv.appendChild(hoverSpan);
  relativeDiv.appendChild(imageDiv);
  card.appendChild(relativeDiv);
  container.appendChild(card);

  return container;
}

const imageContainer = document.querySelector(
  ".relative.mb-4.w-full.pb-2.flex.gap-3.snap-x.snap-mandatory.overflow-x-auto.scrollbar"
);

images.forEach((image) => {
  const imageElement = createImageElement(image);
  imageContainer.appendChild(imageElement);
});
