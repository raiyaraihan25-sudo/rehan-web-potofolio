// Toggle Hamburger Menu
let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// ==========================================
// Logika Animasi Geser Header Navbar
// ==========================================
const indicator = document.querySelector('.nav-indicator');
const navLinks = document.querySelectorAll('.navbar a');
let sections = document.querySelectorAll('section');

function moveIndicator(element) {
    if (!element || window.innerWidth <= 768) return; 
    indicator.style.width = `${element.offsetWidth}px`;
    indicator.style.left = `${element.offsetLeft}px`;
}

window.addEventListener('load', () => {
    const initialActiveLink = document.querySelector('.navbar a.active');
    if (initialActiveLink) {
        setTimeout(() => moveIndicator(initialActiveLink), 100); 
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        moveIndicator(this);
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    });
});

window.onscroll = () => {
    let currentId = '';
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) { currentId = id; }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentId)) {
            link.classList.add('active');
            moveIndicator(link); 
        }
    });
};

window.addEventListener('resize', () => {
    const activeLink = document.querySelector('.navbar a.active');
    moveIndicator(activeLink);
});


// ==========================================
// DATA & LOGIKA PROJECT SHOWCASE
// ==========================================
const projectsData = [
    {
        id: 0,
        mainTitle: "survey S.I.D",       // <-- Tambahkan ini
        subTitle: "Surveyor", 
        Deskripsi:"Melaksanakan survey lapangan untuk mengidentifikasi kondisi lahan dan kebutuhan bahan pangan petani sebagai dasar penyaluran bantuan pemerintah.",
        mainImage: "gambar/surveyor.jpeg",
        gallery: ["gambar/surveyor.jpeg","gambar/surveyor.jpeg"
        ]
    },

    {
        id: 1,
        mainTitle: "survey Pertamina",       // <-- Tambahkan ini
        subTitle: "Surveyor", 
        Deskripsi:"Melaksanakan pengukuran topografi lapangan menggunakan alat survey (RTK) untuk mendapatkan data elevasi dan koordinat secara akurat.",
        mainImage: "gambar/surveyor_1.jpeg",
        gallery: ["gambar/surveyor_1.jpeg","gambar/surveyor.jpeg"
        ]
    },

    {
        id: 2,
        mainTitle: "Nippon Koei Co., LTD ",      
        subTitle: "Magang",
        Deskripsi:"Nippon Koei, Konsultan Teknik Internasional No. 1 di Jepang, mendirikan Kantor Perwakilan Jakarta pada tahun 1967. Kami dengan cepat membangun reputasi untuk pekerjaan berkualitas tinggi dalam perencanaan, desain, dan layanan teknik.",
        mainImage: "gambar/magang nippon.jpeg", 
        gallery: ["gambar/magang nippon.jpeg"]
    },

    {
        id: 3,
        mainTitle: "CV. Dunia Grafindo",      
        subTitle: "Magang",
        Deskripsi:"CV. dunia grafindo ialah perusahaan yang berjalan dibidang industri percetakan yang berada di surabaya, banyak sekolah-sekolah yangmeminta untuk mencetak di tempat ini mulai dari mencetak kalender, buku majalah banner, poster, cetak mug pada gelas maupun padabotol dan juga menyablon pada kaos.",
        mainImage: "gambar/magang smk.jpeg", 
        gallery: ["gambar/magang smk.jpeg"]
    },
    {
        id: 4,
        mainTitle: "Jamaah Masjid Al-Azhar (JMAA)",      
        subTitle: "Kadiv media kreatif pada idul adha 2023",
        Deskripsi:"Jamaah Masjid Al-Azhar (JMAA) adalah salah suatu organisasi kerohanian islam mahasasiwa yang berada di Departemen TeknikInfrastruktur Sipil . JMAA sendiri merupakan wadah bagi para warga Kampus ITS Manyar untuk memperdalam agama islam, serta jugauntuk tempat para mahasiswa mengembangkan softskill dan hardskill.", 
        mainImage: "gambar/jmma.jpeg",
        gallery: ["gambar/jmma.jpeg"]
    },

    {
        id: 5,
        mainTitle: "Jamaah Himpunan Mahasiswa Diploma Sipil",      
        subTitle: "Staff Media Informasi Kabinet Ekplorasi Perubahan",
        Deskripsi:"Himpunan Mahasiswa Diploma Sipil (HMDS) merupakan suatu organisasi mahasiswa yang berada di Departemen Teknik Infrastruktur Sipil. Himpunan Mahasiswa Diploma Sipil juga merupakan wadah terbaik bagi mahasiswa Departemen Teknik Infrastruktur Sipil untuk mengembangkan softskill dan hardskill di bidang keprofesian.", 
        mainImage: "gambar/himpunan.jpeg",
        gallery: ["gambar/himpunan.jpeg"]
    },

    {
        id: 6,
        mainTitle: "D'Village 12 & 13th Edition",      
        subTitle: "Staff Media Informasi Kabinet Ekplorasi Perubahan",
        Deskripsi:"D'Village 13th Edition merupakan serangkaian acara tahunan yang diadakan oleh HMDS (Himpunan Mahasiswa Diploma Sipil) yang bertujuan untuk mengembangkan dan meningkatkan serta memberikan kontribusi pada dunia ketekniksipilan untuk generasi muda dalam skala nasional", 
        mainImage: "gambar/dvillage.jpeg",
        gallery: ["gambar/dvillage.jpeg"]
    },


    {
        id: 7,
        mainTitle: "Geigi 2024",      
        subTitle: "Mentor",
        Deskripsi:"Himpunan Mahasiswa Diploma Sipil (HMDS) merupakan suatu organisasi mahasiswa yang berada di Departemen Teknik Infrastruktur Sipil. Himpunan Mahasiswa Diploma Sipil juga merupakan wadah terbaik bagi mahasiswa Departemen Teknik Infrastruktur Sipil untuk mengembangkan softskill dan hardskill di bidang keprofesian.", 
        mainImage: "gambar/geirgi_2024.jpeg",
        gallery: ["gambar/geirgi_2024.jpeg"]
    },

    // {
    //     id: 3,
    //     mainTitle: "Makrab 1.0 DTIS'2022", 
    //     subTitle: "Staff Divisi Dokum pada Makrab DTIS'22",
    //     Deskripsi:"Makrab DTIS'22 merupakan serangkaian acara yang diadakan oleh mahasiswa Diploma Sipil tahun angkatan 2022 yang bertujuan untukmembangun keakraban dan mempererat hubungan antar satu mahasiswa dengan mahasiswa lain.",
    //     mainImage: "gambar/panitia_makrab.jpeg", // Atau gambar/project_1.jfif sesuai ketersediaan file Anda
    //     gallery: [
    //         "gambar/panitia_makrab.jpeg",
    //         "gambar/panitia_makrab.jpeg"
    //     ]
    // },
    // { id: 4,
    //     mainTitle: "Makrab 2.0 DS43",
    //     subTitle: "Staff Divisi Perlengkapan pada Makrab 2.0 DS43 Feed",
    //     Deskripsi:"Makrab 2.0 DS43 merupakan serangkaian acara internalisasi yang diadakan oleh DS43 yang bertujuan untuk membangun keakraban dan mempererat hubungan antar satu warga DS43 dengan warga DS43 yang lain",
    //     mainImage: "gambar/panitia_makrab_1.jpeg", 
    //     gallery: [
    //         "gambar/panitia_makrab_1.jpeg"
    //     ]
    //     },
    // { id: 5,
    //     mainTitle:"VCC 2023",
    //     subTitle: "Staff Divisi PDD pada VCC 2023",
    //     Deskripsi:"Vocation Champions Cup (VCC) merupakan serangkaian perlombaan yang diadakan oleh Fakultas Vokasi yang berada di ITS, Kegiatan ini merupakan tempat untuk para mahasiswa fakultas vokasi untuk menunjukkan kemampuan dan skillsnya di bidang Olahraga.", 
    //     mainImage: "gambar/dokum_vcc.jpeg", 
    //     gallery: ["gambar/dokum_vcc.jpeg"] },
    // { id: 6,
    //     mainTitle: "Gerigi 2024", 
    //     subTitle: "Mentor gerigi 2024",
    //     Deskripsi:"Generasi Integralistik GERIGI ITS merupakan wadah yang menyatukan seluruh mahasiswa baru sebagai bentuk orientasi mahasiswa baru tingkat institut yang bertujuan untuk memperkenalkan mahasiswa baru terhadap kehidupan kampus di ITS Surabaya. Sebagai momen yang mempersatukan seluruh mahasiswa ITS, GERIGI berperan dalam menanamkan rasa persatuan antar mahasiswa ITS agar dapat bersatu dalam satu birunya ITS.",
    //     mainImage: "gambar/geirgi_2024.jpeg", 
    //     gallery: ["gambar/geirgi_2024.jpeg"] },
    // { id: 7,
    //     mainTitle: "KJI KGBI 2024", 
    //     subTitle: "Staff pembantu",
    //     Deskripsi:"Kompetisi Jembatan Indonesia (KJI) merupakan wadah pembinaan dan pengembangan kompetensimahasiswa di bidang teknik sipil dan rekayasa struktur, khususnya dalam perancangan dan konstruksijembatan. Kompetisi ini sebelumnya dikenal sebagai Kompetisi Jembatan Baja Indonesia (KJBI), yang telahdiselenggarakan secara berkelanjutan selama bertahun-tahun dan menjadi salah satu ajang prestisiusdalam pengembangan talenta rekayasa nasional.",
    //     mainImage: "gambar/kji kbgi.jpeg", 
    //     gallery: ["gambar/kji kbgi.jpeg"] }
];

const tabBtns = document.querySelectorAll('.tab-btn');
const tabIndicatorProject = document.getElementById('tabIndicatorProject');

const mainDisplayImage = document.getElementById('mainDisplayImage');
const modalSliderImage = document.getElementById('modalSliderImage');
const mainDisplayTitle = document.getElementById('mainDisplayTitle');
const mainDisplaySub = document.getElementById('mainDisplaySub');

const btnDetailModal = document.getElementById('btnDetailModal');
const projectModal = document.getElementById('projectModal');
const closeModalBtn = document.getElementById('closeModal');

// Tombol Slider
const sliderPrev = document.getElementById('sliderPrev');
const sliderNext = document.getElementById('sliderNext');

let currentActiveProjectIndex = 0;
let currentGalleryIndex = 0;

// Geser Indikator Pil Tab Project
function moveProjectIndicator(btn) {
    if(!tabIndicatorProject) return;
    tabIndicatorProject.style.width = `${btn.offsetWidth}px`;
    tabIndicatorProject.style.left = `${btn.offsetLeft}px`;
    
    const tabsContainer = document.querySelector('.project-tabs');
    if (tabsContainer && window.innerWidth <= 768) {
        tabsContainer.scrollTo({
            left: btn.offsetLeft - 20,
            behavior: 'smooth'
        });
    }
}

// Fungsi Update Tampilan Gambar Utama
function updateMainDisplay(index) {
    if(!projectsData[index]) return;

    const data = projectsData[index];
    currentActiveProjectIndex = index;
    
    if(mainDisplayImage) mainDisplayImage.style.opacity = 0; 
    if(mainDisplayTitle) mainDisplayTitle.style.opacity = 0;
    if(mainDisplaySub) mainDisplaySub.style.opacity = 0;
    
    setTimeout(() => {
        if(mainDisplayImage) mainDisplayImage.src = data.mainImage;
        if(mainDisplayTitle) mainDisplayTitle.innerText = data.mainTitle || "Judul Project";
        if(mainDisplaySub) mainDisplaySub.innerText = data.subTitle || "";
        
        if(mainDisplayImage) mainDisplayImage.style.opacity = 1;
        if(mainDisplayTitle) mainDisplayTitle.style.opacity = 1;
        if(mainDisplaySub) mainDisplaySub.style.opacity = 1;
    }, 300);
}

// =====================================
// FUNGSI PINTAR: Menyembunyikan Judul jika data kosong
// =====================================
function toggleModalSection(elementId, content) {
    const textElement = document.getElementById(elementId);
    if (!textElement) return;

    const titleElement = textElement.previousElementSibling; // Mengambil tag <h4> di atas <p>

    if (content && content.trim() !== "") {
        textElement.innerText = content;
        textElement.style.display = 'block'; // Tampilkan teks
        if(titleElement) titleElement.style.display = 'block'; // Tampilkan judul <h4>
    } else {
        textElement.style.display = 'none'; // Sembunyikan teks
        if(titleElement) titleElement.style.display = 'none'; // Sembunyikan judul <h4>
    }
}

// Fungsi Update Isi Modal Popup
function updateModalContent(index) {
    if(!projectsData[index]) return;
    const data = projectsData[index];
    
    // Memasukkan data dan menyembunyikan otomatis jika kosong
    toggleModalSection('modalTujuan', data.tujuan);
    toggleModalSection('modalMetode', data.metode);
    toggleModalSection('modalHasil', data.hasil);
    toggleModalSection('modalDeskripsi', data.Deskripsi); // Typo sudah diperbaiki di sini
    
    // Reset slider
    currentGalleryIndex = 0;
    if(data.gallery && data.gallery.length > 0 && modalSliderImage) {
        modalSliderImage.src = data.gallery[currentGalleryIndex];
    }
    
    // Sinkronkan tab
    tabBtns.forEach(b => b.classList.remove('active'));
    if(tabBtns[index]) {
        tabBtns[index].classList.add('active');
        moveProjectIndicator(tabBtns[index]);
    }
}

// Inisialisasi awal
window.addEventListener('load', () => {
    const firstProjectBtn = document.querySelector('.tab-btn.active');
    if (firstProjectBtn) {
        setTimeout(() => moveProjectIndicator(firstProjectBtn), 200);
        updateMainDisplay(0);
    }
});

// Klik Tab
tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        if(index >= projectsData.length) return;

        tabBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        moveProjectIndicator(this);
        updateMainDisplay(index);
    });
});

window.addEventListener('resize', () => {
    const activeProjectTab = document.querySelector('.tab-btn.active');
    if(activeProjectTab) moveProjectIndicator(activeProjectTab);
});

// Buka Modal (Tombol Lihat Selengkapnya)
if (btnDetailModal) {
    btnDetailModal.addEventListener('click', () => {
        updateModalContent(currentActiveProjectIndex);
        projectModal.classList.add('show');
    });
}

// Tutup Modal
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        projectModal.classList.remove('show');
    });
}

if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('show');
        }
    });
}

// Slider Prev/Next Modal
if (sliderPrev) {
    sliderPrev.addEventListener('click', () => {
        const gallery = projectsData[currentActiveProjectIndex].gallery;
        if(!gallery || gallery.length === 0) return;

        currentGalleryIndex--;
        if (currentGalleryIndex < 0) currentGalleryIndex = gallery.length - 1; 
        
        modalSliderImage.style.opacity = 0;
        setTimeout(() => {
            modalSliderImage.src = gallery[currentGalleryIndex];
            modalSliderImage.style.opacity = 1;
        }, 200);
    });
}

if (sliderNext) {
    sliderNext.addEventListener('click', () => {
        const gallery = projectsData[currentActiveProjectIndex].gallery;
        if(!gallery || gallery.length === 0) return;

        currentGalleryIndex++;
        if (currentGalleryIndex >= gallery.length) currentGalleryIndex = 0; 
        
        modalSliderImage.style.opacity = 0;
        setTimeout(() => {
            modalSliderImage.src = gallery[currentGalleryIndex];
            modalSliderImage.style.opacity = 1;
        }, 200);
    });
}

// ==========================================
// LOGIKA ANIMASI SCROLL REVEAL
// ==========================================
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); 
        }
    });
}, { threshold: 0.15 });

reveals.forEach(reveal => {
    revealObserver.observe(reveal);
});