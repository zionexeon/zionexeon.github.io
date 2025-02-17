const products = [
    {
      name: "Logo SOFTDEV",
      img: "https://res.cloudinary.com/dnmkw2715/image/upload/v1668762511/zionexeonch/SoftDev_Logo_3_gz5tmx.png",
    },
    {
      name: "Logo Mekar Laser",
      img: "https://res.cloudinary.com/dnmkw2715/image/upload/v1668762438/zionexeonch/Mekar_Laser_Logo_2_ayg8i8.png",
    },
    {
      name: "Desain Baju",
      img: "https://res.cloudinary.com/dnmkw2715/image/upload/v1668759743/zionexeonch/Mockup_Kemeja_2_zdh6ss.png",
    },
    {
      name: "Website Bina Cipta",
      img: "https://res.cloudinary.com/dnmkw2715/image/upload/v1667387758/zionexeonch/Screenshot_92_q7dy8a_b5ksan.png",
    },
    {
      name: "Website Smegamart",
      img: "https://res.cloudinary.com/dnmkw2715/image/upload/v1664857354/zionexeonch/smegamart_dtvtkr.png",
    },
    {
      name: "Website Bima Helm",
      img: "https://res.cloudinary.com/dnmkw2715/image/upload/v1664627306/zionexeonch/bimahelm_elnswl.png",
    },
    {
      name: "Website Softdev",
      img: "https://res.cloudinary.com/dnmkw2715/image/upload/v1664627303/zionexeonch/softdev_hjq35i.png",
    },
    {
      name: "Website Mekar Laser",
      img: "https://res.cloudinary.com/dnmkw2715/image/upload/v1664627291/zionexeonch/akrilik_k3qlg8.png",
    },
  ];
  
  let currentPage = 1;
  const itemsPerPage = 6; // Number of products to display per page
  
  function renderProducts() {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = ""; // Clear the grid
  
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = products.slice(start, end);
  
    paginatedItems.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className =
        "w-36 lg:w-80 rounded-lg shadow-md transform transition duration-300 hover:scale-105";
      productDiv.innerHTML = `
                      <div class="relative">
                          <div>
                              <div class="relative hover:opacity-100 bg-opacity-90 duration-300">
                                  <span class="absolute inset-0 z-10 bg-black text-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                                      <h1 class="text-xs lg:text-xl tracking-wider font-bold">${product.name}</h1>
                                  </span>
                                  <div class="w-full flex flex-wrap content-center">
                                      <img src="${product.img}" class="image mx-auto" alt="${product.name}" />
                                  </div>
                              </div>
                          </div>
                      </div>
                  `;
      grid.appendChild(productDiv);
    });
  }
  
  function changePage(direction) {
    currentPage += direction;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;
  
    renderProducts();
  
    // Disable buttons if on first or last page
    document.getElementById("prev-btn").disabled = currentPage === 1;
    document.getElementById("next-btn").disabled = currentPage === totalPages;
  }
  
  // Initial render
  renderProducts();