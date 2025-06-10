const projectData = {
    1: [
      { type: "img", src: "images/project1_1.jpg" },
      { type: "img", src: "images/project1_2.jpg" },
      { type: "video", src: "videos/WhatsApp Video 2025-06-03 at 15.51.40_50d15c78.mp4" }
    ],
    2: [
      { type: "img", src: "images/project2_1.jpg" },
      { type: "img", src: "images/project2_2.jpg" },
      { type: "video", src: "videos/project2_demo.mp4" }
    ],
    3: [
      { type: "img", src: "images/project3_1.jpg" },
      { type: "video", src: "videos/project3_demo.mp4" }
    ]
  };

  function openGallery(projectId) {
    const container = document.getElementById("lightboxContent");
    container.innerHTML = "";

    projectData[projectId].forEach(item => {
      if (item.type === "img") {
        const img = document.createElement("img");
        img.src = item.src;
        container.appendChild(img);
      } else if (item.type === "video") {
        const video = document.createElement("video");
        video.src = item.src;
        video.controls = true;
        video.autoplay = false;
        container.appendChild(video);
      }
    });

    document.getElementById("lightbox").style.display = "flex";
  }

  function closeGallery() {
    document.getElementById("lightbox").style.display = "none";
  }
