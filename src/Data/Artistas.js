// src/data/artistas.ts

import { url } from "astro:schema";

export const artistas = [
  {
    slug: "los-hermanos-barron",
    imagen: "/Cartelera/barron.avif",
    fecha: "11 Septiembre 2026",
    nombre: "Los Hermanos Barron",
    genero: "Norteño / Rancheras",
    im: "/Artistas/Barron-im.avif",
    imMobile: "/Artistas/Barron-im-mov.avif",

    hora: "6:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `Los Hermanos Barrón son una de las agrupaciones con mayor trayectoria y reconocimiento de la música popular del norte de México. Originarios de Río Bravo y criados en Allende, Coahuila, han llevado su particular estilo y sus canciones a distintas generaciones de público.Con una historia musical que comenzó en la década de 1950, el grupo se consolidó como El Conjunto Sabor de Los Hermanos Barrón, destacando por sus interpretaciones de música norteña, tropical y cumbia. `,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `Balete Tortuga`,
    can2nom: `El Gavilan Pollero`,
    can3nom: `16 Toneladas`,
    can4nom: `Mamitas Rezando`,
    can5nom: `16 toneladas`,

    can1noml: `https://open.spotify.com/intl-es/track/5BfvXLQiMaFAWKwK8Cbawn?si=08830210a9e549bb`,
    can2noml: `https://open.spotify.com/intl-es/track/1Dfgf18Jd8VLpmctKvxgX2?si=a6c5c008098d45e6`,
    can3noml: `https://open.spotify.com/intl-es/track/0Vfc37MJFxlhE7eevaSgqO?si=2f72040784a74492`,
    can4noml: `https://open.spotify.com/intl-es/track/6yroBD36FCoxtZpzaTeAeE?si=ce4747d8a3184e08`,
    can5noml: `https://open.spotify.com/intl-es/track/722LbyOteQAvvDb3FdH4rp?si=0100825d9a0d43df`,

    // imagenes
    url1: "https://scontent.fntr6-1.fna.fbcdn.net/v/t39.99422-6/760929836_1733266658000429_2882880896313711400_n.png?stp=dst-jpg_tt6&cstp=mx1325x2048&ctp=s1325x2048&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_aid=0&_nc_eui2=AeGhpngmSiE4TL_rrG_1NK5apnGwQeBMlUWmcbBB4EyVRdTYAUjhBXLbQRV79DrksmlFxGCPq2K04VsMaVFnrFEb&_nc_ohc=vSwnnze5vOMQ7kNvwF7Il4R&_nc_oc=Adpak8R5nlGctMBA4dwsFcwPgzcpri36AmLU5sQWrRYzPHknZ1fVIybUWKqZmiBrRO4rYb8bOwH5QVHtWhO66Bmf&_nc_zt=14&_nc_ht=scontent.fntr6-1.fna&_nc_gid=GwRvyhC_IBGG-1NEqy7j3A&_nc_ss=7b2a8&oh=00_AQFKEIn0skoNJENY9gcUn0owNGHH_R_tXS1xESrGiNIR2A&oe=6A882295",

    url2: "https://scontent.fntr6-3.fna.fbcdn.net/v/t39.99422-6/761677698_1622850215940468_5818093838175054831_n.png?stp=dst-jpg_tt6&cstp=mx1230x2048&ctp=s1230x2048&_nc_sid=833d8c&_nc_eui2=AeHQnx6o-Zfh37R10d6EpGOulrN3BZud31-Ws3cFm53fX0GK3X_f-eibPRhQB3BKdzxQi9Sdf-hiC-GAUGCC6Ecr&_nc_ohc=nLapt4u8LcIQ7kNvwGWl-IQ&_nc_oc=AdqmiVq_zpDVOMMN-11rfQBQcEK6T_A8NN85MwnSzkGRURklchzLDxu9YiOKS9jEVFEg90FV_cfPqKvgCk1H0Ays&_nc_zt=14&_nc_ht=scontent.fntr6-3.fna&_nc_gid=Tugqupe8RtQaD02Sccpd3Q&_nc_ss=7b2a8&oh=00_AQGVyCDYmqHGv6fy5zGIRamVGIQWpOiWeCH6qZ6VBm0JgQ&oe=6A886BDA",

    url3: "https://scontent.fntr6-5.fna.fbcdn.net/v/t39.30808-6/568813477_1388178869981457_2903688663509907095_n.jpg?stp=c200.0.1200.1200a_dst-jpg_tt6&cstp=mx1200x1200&ctp=s552x414&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeECyVeBsi-ljfMoojhF-OqNikBXAZaJ7dqKQFcBlont2geHKeCFS_uywHoTOySic5q_KbkAzFSDj3ou1E_pjTyX&_nc_ohc=ItIq_NaRK6sQ7kNvwGvRbfY&_nc_oc=AdrsKzeU95JD9ayrjPrdmN-YP7c-MbS6_YhvUUrTf3X3Tc4Gww7IPyIKydUkSpyhyKrBrBL-KqOLAKGpef7U4bnb&_nc_zt=23&_nc_ht=scontent.fntr6-5.fna&_nc_gid=vTp-rfmOfmvbNuc2XoJbfg&_nc_ss=7b2a8&oh=00_AQGiitaUJGrL2Z12xWrisJuqRlxfZgkEHihQvqPMdIJJRQ&oe=6A8838E9",

    url4: "https://scontent.fntr6-5.fna.fbcdn.net/v/t39.30808-6/495190178_1239546731511339_6311276571673796987_n.jpg?stp=c240.0.960.960a_dst-jpg_tt6&cstp=mx960x960&ctp=s552x414&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeGBfHYbyVf8ew5pRhIbz2WdMnKPJPkXAL8yco8k-RcAv6MzEUoh7IiZ_9PMfgTip0NaGvpFXgIZ0EgFzmWArx0X&_nc_ohc=pdKdu1U67ngQ7kNvwF0302p&_nc_oc=AdqdOFO-faKG8CAmA3MdzbwUvmDW1PV14mXC96cRAAMz_LAOy_8DaIlysGuaP4cx6OjILS3wgiVT5galBoJPi2Oi&_nc_zt=23&_nc_ht=scontent.fntr6-5.fna&_nc_gid=doT4X82dUE4IX80c_IlHVQ&_nc_ss=7b2a8&oh=00_AQHtu39axZgti7V_rs7GOFE6C8savS1xPlRLFveiYH2DxQ&oe=6A884149",
    // Boletos
    vip: false,
  },
  {
    slug: "banda-tierra-sagrada",
    imagen: "/Cartelera/tierra.avif",
    nombre: "Banda Tierra Sagrada",
    fecha: "12 Septiembre 2026",
    genero: "Banda sinaloense / Regional mexicano",
    im: "/Artistas/tierra-mv.avif",
    imMobile: "/Artistas/tierra-mv.avif",

    hora: "6:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `Banda Tierra Sagrada es una agrupación de música regional mexicana originaria de Mazatlán, Sinaloa, reconocida por su estilo de banda, energía y canciones que han conectado con el público mexicano. Con más de una década de trayectoria, se ha consolidado como una de las agrupaciones destacadas de la escena regional mexicana.

Formada en 2011, la agrupación surgió después de la etapa de sus integrantes como Banda Tierra Santa, proyecto con el que acompañaron durante años a José Ángel Ledesma, “El Coyote”.`,
    facebook: `https://www.facebook.com/BandaTierraSagrada?locale=es_LA`,
    youtube: `https://www.youtube.com/@BandaTierraSagradaOficial`,
    spotify: `https://open.spotify.com/intl-es/artist/0v7JYEoQOQbzNNESKwxmzT`,

    // canciones
    can1nom: `La Buena y La Mala`,
    can2nom: `El Bueno y El Malo`,
    can3nom: `Soy un Desmadre`,
    can4nom: `Asi te Quiero Yo`,
    can5nom: `Provocame`,

    can1noml: `https://open.spotify.com/intl-es/track/4y0n8xKuEKE0J2sThzswhg?si=b442661a19b14547`,
    can2noml: `https://open.spotify.com/intl-es/track/0sGZWfVTPWIv6qbWZZ7cdT?si=656e4ed317484fba`,
    can3noml: `https://open.spotify.com/intl-es/track/2TD8LyMFCqStcDdGbEt0kP?si=6715a664050446ba`,
    can4noml: `https://open.spotify.com/intl-es/track/2F3swc62MyWQ968T3ia3Y7?si=58086e26e6544a1a`,
    can5noml: `https://open.spotify.com/intl-es/track/3wnpHn5p1XuiNSNOCJOCxs?si=02dba852ff3c4d53`,

    // imagenes
    url1: `https://scontent.fntr6-1.fna.fbcdn.net/v/t39.99422-6/775926181_1035107529404743_6449406657420579512_n.png?stp=dst-jpg_tt6&cstp=mx3277x4096&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG7zURo0YoH1c-FJtWQXf8nMeknxjtG24Yx6SfGO0bbhne19Nyrd3RWayv2uc_i5dWNIrEfrinjAf6UKroyO9xx&_nc_ohc=tffuU0Q0xD8Q7kNvwFO8w5Y&_nc_oc=AdoSBTI5XrQXWKUvqnDH8_2UsIhLlq3yaG1KMyeRm9mmL3ATKH4QonM_cF3YmUsM09_JPW5ZwVKebRE7Tc22jxTj&_nc_zt=14&_nc_ht=scontent.fntr6-1.fna&_nc_gid=3dtufHNNxU1NCvNC25jE9Q&_nc_ss=7b2a8&oh=00_AQGzRpBcQCH0SdMtURyx3pG11m5pIuBuZbWtysyVho08kQ&oe=6A8846C5`,
    url2: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.99422-6/776222590_2952094538473110_7717496512297644466_n.png?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH-mhQkdisU8ELCL64U6eJiJLlgubh28owkuWC5uHbyjCi9Dpy6tpUt4ROPcISwIeSGvvRklFNGtymrDzcF1zgb&_nc_ohc=oFljfdeP510Q7kNvwE2hXfX&_nc_oc=AdpaGM9DZh933wz6gGx-7Yxz5jCXVoZSVjNXQKe26Zf7hs5oE4SqUbJpTIyyplQs85_0hdxZ0mtar0rPUytQUCb9&_nc_zt=14&_nc_ht=scontent.fntr6-5.fna&_nc_gid=XQBTmMCVR5jr6fKF-m2LJg&_nc_ss=7b2a8&oh=00_AQEsi17qUhyG_tBCCYZgpYgF4LIY-hHRH7NpyXRFFNMJxg&oe=6A888680`,
    url3: `https://scontent.fntr6-3.fna.fbcdn.net/v/t39.99422-6/757112883_1696989168087425_2852383632980032483_n.png?stp=dst-jpg_tt6&cstp=mx3277x4096&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE8Ql4qPHVAvLHu9QEe24Oikuoe0cHjD5KS6h7RweMPkh3lqAQPuxlBCyqKnqZFJ27GioghtOqUL4Sa_Zcrsw8u&_nc_ohc=IF0nUwm3rj4Q7kNvwGx1VZ6&_nc_oc=AdpaJcqVOqx9I8OX1sY-EvZqlYS-W_pOiZ8-rqBktqKwNCqdrJPL1BVIE7WazpRJsEFy4bpXgXhZ1elAUA9phyt6&_nc_zt=14&_nc_ht=scontent.fntr6-3.fna&_nc_gid=RKt4bYayUr4ZrnkMvPN6gg&_nc_ss=7b2a8&oh=00_AQEP35nMLoY3NpOwUuQIZOQXRw3lN6b1HRf33oJd6nwXMw&oe=6A8825AF`,

    url4: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.99422-6/753833408_1994734617890452_7459620652185821452_n.png?stp=c0.270.3277.3277a_dst-jpg_tt6&cstp=mx3277x3277&_nc_cat=102&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeGOhi6bF_v_Q_2zu0D6H2gbHl619u35nGceXrX27fmcZ_FliXWDGlWszjloPzWJzt4eJR9yttCSrrvuZnFE8QBx&_nc_ohc=dTFBVXR86fQQ7kNvwEOSm9h&_nc_oc=AdrCtLdRBQFJ04mLHQ8_m43P9PlIE0JTgmSel9uI8N1GxILot9bpOqZvSFs_wa88CKkO4CV-6Ptoc2PMdOUjoOLS&_nc_zt=14&_nc_ht=scontent.fntr6-5.fna&_nc_gid=ywZ-Af8UEFGbP_8zYSCpiA&_nc_ss=7b2a8&oh=00_AQF4nULhkCF4sjuWiyPHBZTEqP0KepZQwpWFeYYJOvqV4g&oe=6A88529E`, // Boletos
    vip: true,
    linkVip: `https://jrticket.tickesoft.com/eventos/feria-sabinas-xf2Rm`,
  },
  {
    slug: "sonido-mazter",
    imagen: "/Cartelera/mazter.avif",
    nombre: "Sonido Mazter",
    fecha: "13 Septiembre 2026",
    genero: "Cumbia / Música tropical",
    im: "/Artistas/master-mv.avif",
    imMobile: "/Artistas/master-mv.avif",

    hora: "6:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `Sonido Mazter es una de las agrupaciones más representativas de la cumbia y música grupera de Coahuila. Originarios de Monclova, Coahuila, son conocidos como “El Sonido de Acero” y han construido una trayectoria de décadas con un estilo que combina la cumbia con influencias norteñas.

Formado en 1989, el grupo alcanzó gran popularidad durante la década de los 90 con éxitos como “El Último Beso”, “Falsa Traición”, “Este Dolor” y “Quiéreme”. `,
    facebook: `https://www.facebook.com/elsonidomazter?locale=es_LA`,
    youtube: `hhttps://www.youtube.com/channel/UCWvR61KarjHhkReCSMGsosQ`,
    spotify: `https://open.spotify.com/intl-es/artist/2Je9VeZnmnpDrCIwWu3wuM`,

    // canciones
    can1nom: `El Ultimo Beso`,
    can2nom: `Casi Siempre Estoy Pensando En Ti`,
    can3nom: `Falsa Traicion`,
    can4nom: `Quiereme`,
    can5nom: `Muchacho Pobre`,

    can1noml: `https://open.spotify.com/intl-es/track/7mqZwyrBDcigRXoUYIdx0m?si=aa1e2d45abe54a84`,
    can2noml: `https://open.spotify.com/intl-es/track/313aLoAv5EAuPDxXqpFTIe?si=ef6983e3acb24ae9`,
    can3noml: `https://open.spotify.com/intl-es/track/5loQiXgVxhk3OuU8ljUnAH?si=4b233abb26b74adb`,
    can4noml: `https://open.spotify.com/intl-es/track/533br4LGnpDXIMzqjbLHfh?si=e409e98c67224bd3`,
    can5noml: `https://open.spotify.com/intl-es/track/1L3IORJ1HMuXY5vPbmUFYs?si=34b39e4c315b4151`,

    // imagenes
    url1: `https://scontent.fntr6-1.fna.fbcdn.net/v/t39.30808-6/480364829_1192685572222171_4845169479338980983_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeEMztWZZ-1ASCN0PVZAnyfUFEjG2ktadfYUSMbaS1p19iwJQAYNqBj_5fLsldG0w7UNpAl_ihKukyGFmMciOG2h&_nc_ohc=tS0wP1C9tGAQ7kNvwHxNTCD&_nc_oc=Adqvl5dcj8v4sTCPXUBSwzh0H5aFrF8rTloQKOvt96JSMhqJ_i9M1TVaOaPLyrbsMnBYraPQ1suIK370s9RgUcbl&_nc_zt=23&_nc_ht=scontent.fntr6-1.fna&_nc_gid=I6eFqA2KBykfL7_uptvrCw&_nc_ss=7b2a8&oh=00_AQEcyfmQHgvrTPydczW0hBvpLelIIan8LwAD2jTzwmbLfA&oe=6A8827E1`,

    url2: `https://scontent.fntr6-3.fna.fbcdn.net/v/t39.30808-6/481056332_1197561948401200_998103270213861724_n.jpg?stp=dst-jpg_tt6&cstp=mx1420x640&ctp=s1420x640&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFQ5YBO77AYl0aszLnO9B9dtJS7FcoN83C0lLsVyg3zcMTlVgpeSqBikpfS6IT-iSHHLt1iE8SG-SBcNskb899V&_nc_ohc=6xMA5jGEMngQ7kNvwHDNRhN&_nc_oc=AdrkOK50Ehz1uXf7-q-I_jEimr-BB1WGGSBU-HAcoGCvE1g7HVuMeVAD7PU2sQQZlelnaXxsAlulo4PEtMBEWlJO&_nc_zt=23&_nc_ht=scontent.fntr6-3.fna&_nc_gid=69UGsyGfGOAlM7wwQG5v9Q&_nc_ss=7b2a8&oh=00_AQF1uE42rFyzm2CtQLWSnxdo0aBT3SRoQCN8exc8eOs_NA&oe=6A888718`,

    url3: `https://scontent.fntr6-1.fna.fbcdn.net/v/t39.30808-6/480210886_1193079805516081_2618137105862698727_n.jpg?stp=c350.0.900.900a_dst-jpg_tt6&cstp=mx900x900&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeF7WH8VB2kePvqvPUf4DwAD8y_hopz-VOTzL-GinP5U5GDc1yZ9HPx_BUAXG5JiCG2hgWZ7XVAji8qKDuf5JRWk&_nc_ohc=RfUOeF7TKHcQ7kNvwGmc2sm&_nc_oc=Adogji09MRyvitiskoZM1zP7qkW21LqSi4QZBRGw3Ia3iD4i3PZtc855s-SvCGF7QArgjB_P_noctGQuwICI-Rt6&_nc_zt=23&_nc_ht=scontent.fntr6-1.fna&_nc_gid=J_WptAj6yCOkSRpDFbv-cQ&_nc_ss=7b2a8&oh=00_AQGrnADxBOEnKKJBbJO_nJAIhEBAc4ObkZ1GxarRdTBzGQ&oe=6A8831BB`,

    url4: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.30808-6/474117718_1174777080679687_1940907489579696356_n.jpg?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeFQ0nCh8WSGc0zQHMdA7Xa-Apxecd9SprECnF5x31KmsR8SjVHxvwhdUlsrEIRzqVItSYFtsSIJwP_JVkJItN1H&_nc_ohc=h2lvg5eb9f8Q7kNvwFUY5ZY&_nc_oc=Adp7MZt7f_DQ7EOnVGbNUHHUV1Ze7hNlEoMoOy_l96sgikUtX4NsH2C3HnlnMIFdB0R2XwY7sn3vD4DLgSVbk-Lx&_nc_zt=23&_nc_ht=scontent.fntr6-5.fna&_nc_gid=NNocp6vgkrmx06FriBupVQ&_nc_ss=7b2a8&oh=00_AQHbcMMYH7R06JaUe4CtM6b_POfdmNwyqD2e1Y67_FtK0w&oe=6A884BA2`, // Boletos
    vip: false,
    linkVip: ``,

    //demas
  },
  {
    slug: "los-invasores-de-nuevo-leon",
    imagen: "/Cartelera/invasores.avif",
    nombre: "Los Invasores de Nuevo León",
    fecha: "14 Septiembre 2026",
    genero: "Norteño / Corridos / Rancheras",
    im: "/Artistas/invasores-mv.avif",
    imMobile: "/Artistas/invasores-mv.avif",

    hora: "6:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `Los Invasores de Nuevo León son una de las agrupaciones más emblemáticas e influyentes de la música norteña y regional mexicana. Originarios de Monterrey, Nuevo León, han construido una trayectoria de más de cuatro décadas, convirtiéndose en referentes del género y llevando su música a generaciones de seguidores en México y Estados Unidos.`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: ` Mi casa Nueva`,
    can2nom: `Playa Sola`,
    can3nom: `A Mi, Que me Quedo?`,
    can4nom: `Laurita Garza`,
    can5nom: `Aguanta Corazon`,

    can1noml: `https://open.spotify.com/intl-es/track/0YqxST7jMa8B4Ecr1675u6?si=c42af37b364142fe`,
    can2noml: `https://open.spotify.com/intl-es/track/0mzpP5g8OCOj3dCtowPAjV?si=6432425798014381`,
    can3noml: `https://open.spotify.com/intl-es/track/0b72rOmkspR8dJHsUjaVi4?si=d7a985d1a5304f54`,
    can4noml: `https://open.spotify.com/intl-es/track/7a5msYrIHJ1bx7pTLKVbZ9?si=c4153ab6160a4ae8`,
    can5noml: `https://open.spotify.com/intl-es/track/6E5gZOwEMVED0hNBeaTu9k?si=9581eb918824439b`,

    // imagenes
    url1: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.30808-6/762886073_1618703332945765_1851543973760066480_n.jpg?stp=c200.0.1200.1200a_dst-jpg_tt6&cstp=mx1200x1200&_nc_cat=104&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeHQ-pTnZQ7OXc83SgghbdGvMj1ejFXAD2UyPV6MVcAPZVfUXhNe2bX52TtwSrfxS1cCgwpdTnsNKGtf6KPqYRhm&_nc_ohc=rf6X7VZ9thIQ7kNvwGU1iRG&_nc_oc=Adp3bA6UWosTvn11zUyXJ-FWG6nA0ShmpmSRIrPxn4XKFUWz2lPyxODJ57TJ2jLQQkXQXI-fna_cmysU4b14vxa6&_nc_zt=23&_nc_ht=scontent.fntr6-5.fna&_nc_gid=fvSuE51honsy7HIQt-1mlQ&_nc_ss=7b2a8&oh=00_AQGgRniAZKOaf4mc3fspI2GYvlykCH3zVSkm1dT2Bdt0Uw&oe=6A8854F9`,

    url2: `https://scontent.fntr6-1.fna.fbcdn.net/v/t39.30808-6/762404680_1616857896463642_6050181469268039465_n.jpg?stp=c138.0.1070.1070a_dst-jpg_tt6&cstp=mx1070x1070&_nc_cat=103&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeGbMgl1GmwwbagVvoVI-LlKvmPm2ve9vLW-Y-ba9728tb1v067wNjIvwNRRw7h7yfduH7KQJE1amjkAhmPFy1Qa&_nc_ohc=bi9NOGOoAGkQ7kNvwF-lMTq&_nc_oc=Adpcmf0kYOv2eGqrG3r-cDmui2NUr9LRyyNLN8L12vE3Mc8O-R8AA4Xy-QJiAdXIiqPEhpGsb-Bg81TiqALIPT8f&_nc_zt=23&_nc_ht=scontent.fntr6-1.fna&_nc_gid=O_HOZMZRDIgKZiwKAOIYFg&_nc_ss=7b2a8&oh=00_AQE3CODEFJ-N1iixqcLHD-CSMqQTBEoMmTcKyaGsvfviPg&oe=6A883564`,

    url3: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.99422-6/748746024_1699943084387454_285489448412024395_n.png?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeHGUUiG4y-X0M2WoWS-AvMSTdUUWm1jukBN1RRabWO6QMtXX-bIDsc3FA6KFRrypmJGF3ivSnSCx3apeN6eu4MG&_nc_ohc=j5a5YjlWSrMQ7kNvwE7_1eu&_nc_oc=AdqWKFxqpoEvjB0Iua6npYfXdYjtQFCn-KVOnepCxooqfBui8mwVo61V3rQseofEHmzBffAkdacTBGkdjbrSFwtP&_nc_zt=14&_nc_ht=scontent.fntr6-5.fna&_nc_gid=ISKLqbNIK2qy90lDnIEZjw&_nc_ss=7b2a8&oh=00_AQGtjbEMVzjIeRcMI8ZYJJ0p-4QIq8tXVX1wo70RRiUh4Q&oe=6A8854F2`,

    url4: `https://scontent.fntr6-1.fna.fbcdn.net/v/t39.99422-6/738653521_885582310714226_5336320727118681907_n.png?stp=c448.0.1152.1152a_dst-jpg_tt6&cstp=mx1152x1152&_nc_cat=103&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeFu3fl1a8BZMTUmBO8WpzP236yDWQXzZlDfrINZBfNmULOUMGWrNA_M7vRxBZOIWZwT_ufaDAqbmnxtYvsWFqaY&_nc_ohc=S_5W0Tv_U9kQ7kNvwEYveI8&_nc_oc=AdrDYg3LtDu2TL38LPjK5wzipwDLBETgqc6D1AXmjCpXqX2aojuXGvm9rCUA4rx9oP_jSAFkOc5LvtJ3QykFnbss&_nc_zt=14&_nc_ht=scontent.fntr6-1.fna&_nc_gid=R4zj8P_xXiNtRZd64152dw&_nc_ss=7b2a8&oh=00_AQEzVtKCtZ7wYFCZcDx3tR7HbBhh5e7MuHkNrkqTHX_gkQ&oe=6A88478D`, // Boletos
    vip: false,
  },
  {
    slug: "mister-chivo",
    imagen: "/Cartelera/chivo.avif",
    nombre: "Mister Chivo",
    fecha: "15 Septiembre 2026",
    genero: "Tropical / Cumbia / Grupero",
    im: "/Artistas/chivo-mv.avif",
    imMobile: "/Artistas/chivo-mv.avif",

    hora: "6:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `Mister Chivo es una de las agrupaciones más reconocidas de la música tropical y cumbia mexicana. Originarios de Ciudad Miguel Alemán, Tamaulipas, comenzaron su historia musical en la década de los 70 y se distinguieron por su estilo alegre, bailable y su particular combinación de cumbia, música romántica y sonidos gruperos.`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `La LLorona`,
    can2nom: `Soy Dracula`,
    can3nom: `El Tocadiscos`,
    can4nom: `Cumbia Disquete`,
    can5nom: `La Gallinita`,

    can1noml: `https://open.spotify.com/intl-es/track/2XPguqYrDNzh1XsHKX1LtG?si=fc12f0894fab48e9`,
    can2noml: `https://open.spotify.com/intl-es/track/6qBeoNdWrjx5A9rMEGMrQx?si=a4c6c4f5ea984c09`,
    can3noml: `https://open.spotify.com/intl-es/track/5gVglj2JqOk1WxfrDEGBof?si=a14cf83aecae4648`,
    can4noml: `https://open.spotify.com/intl-es/track/1IOsllg74916ZLhSgUF67o?si=aa63c5bf6dba4a37`,
    can5noml: `https://open.spotify.com/intl-es/track/5FRNxqu1sRAQXPWUPCTAHi?si=1a5de58b46c14f60`,

    // imagenes
    url1: `https://scontent.fntr6-3.fna.fbcdn.net/v/t39.30808-6/481229189_1167386221415243_8913342210366751586_n.jpg?stp=c0.139.540.540a_dst-jpg_tt6&cstp=mx540x540&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeEBGXYOQFMw_Amv8byMWZEYCKvzdqyQtNoIq_N2rJC02tYsbh4dPKTxHjJN8Z1oPasmcet3m2omozNJGfQWd6M8&_nc_ohc=MQznk6jhTCYQ7kNvwGjamq6&_nc_oc=AdpY4KcA9QjJI6WgmRLmlmMz940hG8c8CCu6LMijU6IQjnkUclnh7nx2O1lOObwMr7O896gvhDyBvHkJfP152a2C&_nc_zt=23&_nc_ht=scontent.fntr6-3.fna&_nc_gid=_6UA9H-7DPkeLb4IQOrEEA&_nc_ss=7b2a8&oh=00_AQF6tAjYOFeysiNt6rZHOi4yE82i_HXz3xR4kqAU1g6l4A&oe=6A883C7B`,

    url2: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.30808-6/480951893_1167386214748577_2527733520744675372_n.jpg?stp=c0.139.540.540a_dst-jpg_tt6&cstp=mx540x540&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeH_o_WcbRtwWsceYGjNOSfTQn7AbxXxi25CfsBvFfGLbtgvvvsqR7nhioERNofY_EevugptM8fnK58L9-pTCS1J&_nc_ohc=7OQKZWIQj8UQ7kNvwG9Fl_D&_nc_oc=AdpGySTwFC5LfS0ZHI7OQFnO4IDbE-bKsYb9Rj_TrIsGaXFbpkjKY_nKFa6Ai2NLzHjre51Bs9Z6kkJbbPMEqbgn&_nc_zt=23&_nc_ht=scontent.fntr6-5.fna&_nc_gid=PpULqGVtuYGqPTyPe32MRw&_nc_ss=7b2a8&oh=00_AQFeBQePiXJcxnrP_m8zj2I9Cj3RwelV2N75AzXD5fqKtQ&oe=6A883275`,

    url3: `https://scontent.fntr6-3.fna.fbcdn.net/v/t39.30808-6/475303707_1144217437065455_2915335569435745415_n.jpg?stp=c342.0.1365.1365a_dst-jpg_tt6&cstp=mx1365x1365&_nc_cat=109&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeGlAMdJ03XQ0sIsV6x8EA4bN4wIQVbOHKw3jAhBVs4crBg9P8kJYTX_XWDcNBr4xXFlogkKOYuwizaOczSlw06Y&_nc_ohc=r6GWFKRNuYYQ7kNvwFlInWW&_nc_oc=AdrBzK6_PMmF9vS-GHq40SobYLaCELi9IxqAp1F5XMU0mQWD4-U2WSFxs9fYIVLaZzFJ6hU7q7H1g8fYzgbdN33N&_nc_zt=23&_nc_ht=scontent.fntr6-3.fna&_nc_gid=bm2hTz9XTPoXzKk3Bevdng&_nc_ss=7b2a8&oh=00_AQGeYYa6Dxj7bluSvTfn8OTsWBPv6NHTa1M3jbOHnccEWw&oe=6A884327`,

    url4: `https://scontent.fntr6-3.fna.fbcdn.net/v/t39.30808-6/514101042_24126091630384464_1273896380351209406_n.jpg?stp=c60.0.578.578a_dst-jpg_tt6&cstp=mx578x578&_nc_cat=109&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeHHoAMaFpTHaoqCw-kvP9MAv235pD5KPzG_bfmkPko_MeSBMrokLcgMOdKZcN2XEOTlBj6iBFqn1KyvhbPSK9ku&_nc_ohc=J9xY1EPMGwcQ7kNvwEzqrdS&_nc_oc=Ado3xYMbgoiLpcFMP2gzTUJXlKkGj4Jl3QCkz8lzWy1axDjuKX9B8FYQGFucto9nou_U-lzyp0ZYXPFQ1qU4Bg6d&_nc_zt=23&_nc_ht=scontent.fntr6-3.fna&_nc_gid=vQmX6GdLVzXcli6DKxQwMQ&_nc_ss=7b2a8&oh=00_AQH_LQL_JZkq5_O2DJCMZXhI32BjSgJ-inksAJnYYrjakg&oe=6A88548D`, // Boletos
    vip: false,
    linkVip: ``,
  },
  {
    slug: "marca-registrada",
    imagen: "/Cartelera/marca.avif",
    nombre: "Grupo Marca Registrada",
    fecha: "16 Septiembre 2026",
    genero: "Regional mexicano / Norteño / Corridos",
    im: "/Artistas/marca-mv.avif",
    imMobile: "/Artistas/marca-mv.avif",

    hora: "6:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `Grupo Marca Registrada es una de las agrupaciones más destacadas de la nueva generación del regional mexicano. Originarios de Culiacán, Sinaloa, el grupo se caracteriza por combinar la música norteña y los corridos con una producción moderna, logrando conectar con una nueva generación de seguidores en México, Estados Unidos y Latinoamérica.`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `Di Que Si`,
    can2nom: `Hoy Todo Cambio`,
    can3nom: `Elovrga`,
    can4nom: `El Rescate`,
    can5nom: `El Mayor De Las Ranas`,

    can1noml: `https://open.spotify.com/intl-es/track/3J6d00TsKXTJV9zSJwEOd9?si=e1241e4b373b48bf`,
    can2noml: `https://open.spotify.com/intl-es/track/1tinKBj5pMxJswRan96Mj7?si=6d0bff6924ae44c8`,
    can3noml: `https://open.spotify.com/intl-es/track/2TJKY0WSFufZOzbRNgl6zE?si=31aa2077aa584b47`,
    can4noml: `https://open.spotify.com/intl-es/track/147A9xW2QqtbFGCj00ZR8I?si=c0584610c52140f6`,
    can5noml: `https://open.spotify.com/intl-es/track/7mEPibyVIOAjjHcSD0K0vn?si=412d6a4875ad4589`,

    // imagenes
    url1: `https://scontent.fntr6-3.fna.fbcdn.net/v/t39.30808-6/765035659_1451712210311780_9010935355404842493_n.jpg?stp=c0.89.1080.1080a_dst-jpg_tt6&cstp=mx1080x1080&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeFn57BJ6MMkqNB15-_WWRfzzkSVIkZEJ97ORJUiRkQn3vgsJi7OJ31U27DcQCTUzfuqqbuc-X5SsNlcJVSo5bGC&_nc_ohc=HJIHg7ckipUQ7kNvwHRaJ14&_nc_oc=AdrXs9U2OSBaE3fLs4BHsPTVzegiI0Z_wuvJELg4tKSfzdNmaPBkqebE42gGkIU-X4adWK9zAunzbAMRiGF5yupG&_nc_zt=23&_nc_ht=scontent.fntr6-3.fna&_nc_gid=nim3PNCRO4Zi1Es7KLCimQ&_nc_ss=7b2a8&oh=00_AQHrsTCJ47s9d-lDoiukEyJ7DillD63ZchEDOUUUdcGeLA&oe=6A8828BB`,

    url2: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.30808-6/631873961_1303368651812804_1878219519846468927_n.jpg?stp=c0.211.1280.1280a_dst-jpg_tt6&cstp=mx1280x1280&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeHXj5d_eIPHvtMmD9uHiI6U9uOHv3johmj244e_eOiGaOi2tsVaG40BRwPqKtZEagUwY8DMQ3WqQ3ZmISEpHW5O&_nc_ohc=0PIF4KbCIkoQ7kNvwECzf_-&_nc_oc=Adom6J103L0lH2wYxcs9Q4mdG95BLI6De2IApH9SO4xRE8wi-wRURHlb3swuah8KWUETwQvhwd8MD71PyWrhAO5P&_nc_zt=23&_nc_ht=scontent.fntr6-5.fna&_nc_gid=E0ZfH_ainiIXEA-iTjVP2Q&_nc_ss=7b2a8&oh=00_AQEwUc6-fIQ5vcG22LOHhEdwTtWuDRGwSc71Rs40vEKX3g&oe=6A88346E`,

    url3: `https://scontent.fntr6-1.fna.fbcdn.net/v/t39.30808-6/607616335_1270492278433775_4880041074445253936_n.jpg?stp=c0.211.1280.1280a_dst-jpg_tt6&cstp=mx1280x1280&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeFc6MAS_kud3yqavX9IscZAVSSMj_7lLktVJIyP_uUuS32gxMShUTpnJmQSTvgKIXTWvPzpqhYu76NsizPhPWbV&_nc_ohc=ME83-AN5UqUQ7kNvwG1SZ1J&_nc_oc=AdqMXikSRtrZbOVKQUOPznNHZl_mQYjtr-yxL6GQP_7w-35paAaNdFghUAZSBSzY-BxZeMTSPdLM44a73nLh6EK3&_nc_zt=23&_nc_ht=scontent.fntr6-1.fna&_nc_gid=2OWPMupjmYzm4xZYvuwrTg&_nc_ss=7b2a8&oh=00_AQHibfWfD1zbQZDsV7VLPmvAJX1hpoxCW_BRU7r-G-EahA&oe=6A88347B`,

    url4: `https://scontent.fntr6-1.fna.fbcdn.net/v/t39.30808-6/484715531_1045515237598148_5247165155031504539_n.jpg?stp=c0.89.1080.1080a_dst-jpg_tt6&cstp=mx1080x1080&_nc_cat=103&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeF5JRSRZSmdw_-kBcknfa5F6Vxr8j9r-WfpXGvyP2v5Z8bKMTgfWtEOx8mYQiIvcJv1fbM4OtGzYDImWaElSp26&_nc_ohc=cIggQXhy_w0Q7kNvwH3AtoS&_nc_oc=AdpzvFum3CLzXHNaET-_a2wxWjGPADsRpCUozQa9Yu8XIyhbtI3wpNCtWA_jDUUaoA1HbkcPgj1OpxlqYpHLv53i&_nc_zt=23&_nc_ht=scontent.fntr6-1.fna&_nc_gid=CFY0t86hxTniPlMPr_91nQ&_nc_ss=7b2a8&oh=00_AQFwal2KJUS4ir6P45zBn3TPb_fN02PUtjQdMO0_XZLxyg&oe=6A885103`, // Boletos
    vip: true,
    linkVip: `https://jrticket.tickesoft.com/eventos/marca-registrada-feriexpo-coah-2026-NWS6g`,
  },
  {
    slug: "la-firma",
    imagen: "/Cartelera/firma.avif",
    nombre: "La Firma",
    fecha: "17 Septiembre 2026",
    genero: "Grupero / Norteño / Tex-Mex",
    im: "/Artistas/firma-mv.avif",
    imMobile: "/Artistas/firma-mv.avif",
    hora: "6:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `La Firma es una reconocida agrupación de música regional mexicana originaria de San Nicolás de los Garza, Nuevo León. Su propuesta se caracteriza por combinar el estilo grupero y norteño con elementos de cumbia, pop, balada y otros ritmos latinos, creando un sonido propio que los ha distinguido durante décadas.`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `Le Dire`,
    can2nom: `Cerquita De Ti`,
    can3nom: `Si Ella Supiera`,
    can4nom: `Como Olvidarla`,
    can5nom: `Ahora Que Estas Conmigo`,

    can1noml: `https://open.spotify.com/intl-es/track/1spvvISCt2fPLjCWT25Oi9?si=dfb4107e613c4c0c`,
    can2noml: `https://open.spotify.com/intl-es/track/45iCrerFJidDXPudKZr5KN?si=df0be3f02f67458a`,
    can3noml: `https://open.spotify.com/intl-es/track/3fbAMckQHANcL1Y9bHQDYg?si=9bf8721d2bc54813`,
    can4noml: `https://open.spotify.com/intl-es/track/4oHEebE3q51eVfrIthLXPn?si=10227d9b7a3547c9`,
    can5noml: `https://open.spotify.com/intl-es/track/7iaQDqknJVoVGlgfRatPNQ?si=aed7ee80dc714ed8`,

    // imagenes
    url1: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.30808-6/652161210_122245272398154922_8671534581908032054_n.jpg?stp=c240.0.960.960a_cp6_dst-jpg_tt6&cstp=mx960x960&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeEmeLKopdkzvH_S-or_4lCSKX6XJC3Ob-opfpckLc5v6jPb8tMqLk36D4-fJ6gk7D2QzyMU7p9mKoOaJAUerNWC&_nc_ohc=EQ7paSzcWPoQ7kNvwFRYeyc&_nc_oc=AdpF8i92srlhzEcRpbCqRWhbSPYYHq0D9vOPbedpZ2B3Vi2KYMTMU72uY1vtD7K3-LpaDzx9JfugyMQ2t-yBPDzE&_nc_zt=23&_nc_ht=scontent.fntr6-5.fna&_nc_gid=70cCWkSzDZFN_d_T783Cyg&_nc_ss=7b2a8&oh=00_AQGb0DTiEVl22SY6zM4gLS78y7h6sYbicaAPyX4Kg3RCtw&oe=6A8847D8`,

    url2: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.30808-6/637681397_122242413452154922_753762547067643666_n.jpg?stp=c240.0.960.960a_dst-jpg_tt6&cstp=mx960x960&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeEI3TcGdml3Xl26Q8k3fLnlxsHfiQqsFkbGwd-JCqwWRmLk51-ByjluLTNzGxS5jwrvZVS9IXtIDGIsRY_S6WS5&_nc_ohc=t4Q1g8-uRX0Q7kNvwGEt7YG&_nc_oc=Adp11ZneU7brCh-TginV1CmR2d62C4WK45bJ6Kt6hnrJtWRi5sST8w_sTAkffd3fPCRI9XlRQew11lM4E5h7Fbrw&_nc_zt=23&_nc_ht=scontent.fntr6-5.fna&_nc_gid=uMA-4vplTpVVvBRyqLsH3A&_nc_ss=7b2a8&oh=00_AQF_QJWTbU9BXoAQWiYK4xinf-GKFH686SQzanse_L3Xiw&oe=6A88416B`,

    url3: `https://scontent.fntr6-1.fna.fbcdn.net/v/t39.30808-6/636721698_122242413404154922_2045429419927848276_n.jpg?stp=c240.0.960.960a_dst-jpg_tt6&cstp=mx960x960&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeHwCLugQzvUY3HgR3pxClFS_4lg-ql2Vpv_iWD6qXZWmwGuKd8Cf8R0e6_CHUwWuYVKFZhndE_9rx-T0dabW22L&_nc_ohc=J9LXI-Cw4ToQ7kNvwFvsYKU&_nc_oc=AdrgrhoTpyndLfnaNV2IIKCJftsz2OSDZhM5wYIvQzUBA-wniT63FRkuv4F4_o4sQ5v50i9QPOxt_WwAcBpvEztq&_nc_zt=23&_nc_ht=scontent.fntr6-1.fna&_nc_gid=uMA-4vplTpVVvBRyqLsH3A&_nc_ss=7b2a8&oh=00_AQHmlsJONnndXhM9twCmeeckoUERi8J5roJop8sxINi_Yg&oe=6A884F0B`,

    url4: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.30808-6/536270272_122219999720154922_5750609189001478134_n.jpg?stp=c0.158.960.960a_dst-jpg_tt6&cstp=mx960x960&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeGOxaQnZj32qnTjI8zZDTK3uqsG6mMzPEG6qwbqYzM8Qa2ZrkKG4RProSKcQrc2hsQagau5anKnbNg89dEUQXAi&_nc_ohc=Pgb84GEjECoQ7kNvwGO_TEE&_nc_oc=AdqWy9_BnESCCwv90HzBGNfKkrSumJ-3ogwejhfvq1lNB9ByGFPNFHjXddQrAe_lB9p7jFd0RoA62aCr9RSsQQIw&_nc_zt=23&_nc_ht=scontent.fntr6-5.fna&_nc_gid=u_HMdKpCIRPvSko35wx4Tg&_nc_ss=7b2a8&oh=00_AQGkt6KCLeEneXHlX3CScMhmIPq1PEQ4caZbeQ3i5YKqNQ&oe=6A883F4E`, // Boletos
    vip: true,
    linkVip: `https://jrticket.tickesoft.com/eventos/feria-sabinas-TRddO`,
  },
  {
    slug: "leandro-rios",
    imagen: "/Cartelera/leandro.avif",
    nombre: "Leandro Rios",
    fecha: "17 Septiembre 2026",
    genero: "Norteño / Corridos / Regional mexicano",
    im: "/Artistas/leandro-mv.avif",
    imMobile: "/Artistas/leandro-mv.avif",
    hora: "6:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `Leandro Ríos, conocido como “El Penco”, es uno de los exponentes destacados de la nueva generación de la música norteña. Originario de Los Ramones, Nuevo León, desde muy joven desarrolló su pasión por la música norteña, inspirado por grandes figuras como Ramón Ayala, Lorenzo de Monteclaro, Los Invasores de Nuevo León y Los Cadetes de Linares.`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `Debajo Del Sombrero`,
    can2nom: `Un Poco Tarde`,
    can3nom: `Ojitos Al Reves`,
    can4nom: `Y Como Es El`,
    can5nom: `Chi Pon Chi Pon`,

    can1noml: `https://open.spotify.com/intl-es/track/1WxHPhfIClKbpSnPPHnkF4?si=be811652014f4143`,
    can2noml: `https://open.spotify.com/intl-es/track/72EO1dmubzXwuINokrNfX6?si=33d14158b913432f`,
    can3noml: `https://open.spotify.com/intl-es/track/5HkeL8fpwh26J2iEVP6iLB?si=05ac07b9e9f443f4`,
    can4noml: `https://open.spotify.com/intl-es/track/3Okq45PwqM9RHFemRt8JQ6?si=9878f5b30fee4dda`,
    can5noml: `https://open.spotify.com/intl-es/track/15ZK0RYlJJ2rebPt7hlCsv?si=2b2dda33f2524e8d`,

    // imagenes
    url1: `https://scontent.fntr6-1.fna.fbcdn.net/v/t39.30808-6/605157266_1430515181768349_7248421850044487537_n.jpg?stp=c0.131.1320.1320a_dst-jpg_tt6&cstp=mx1320x1320&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeHeuN1yU4d7Jj-nFctkc98nLL-09Bfh86Qsv7T0F-HzpJdhtJdzxfxYCaRpBEzJTiPX7_LPG8vud_0UkniK_Xyn&_nc_ohc=EOv_2LEd_bAQ7kNvwEpUSVG&_nc_oc=AdqhFpziR3mVoz8ouu-X_ICPOmlM0vfqSRRWDWB-OGj_zqZ8MTYPA8KVgbaWKC9c3uIKQJsKANnsTYKo-hDyqdh3&_nc_zt=23&_nc_ht=scontent.fntr6-1.fna&_nc_gid=KxNPZ5lP1jrM3kx2IQavTQ&_nc_ss=7b2a8&oh=00_AQFSDYpFhc52nsABrHad_VPhrNKfVnOr4dlDPHK_w3fT3w&oe=6A8838B7`,

    url2: `https://scontent.fntr6-1.fna.fbcdn.net/v/t51.82787-15/584398963_18543960040060044_840017507857707539_n.jpg?stp=c0.158.1440.1440a_dst-jpg_tt6&cstp=mx1440x1440&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeEIvUaZwmRmgjvEAUfphRzD2jkv3dSsRrjaOS_d1KxGuKCq2vUvLCZtt61sootGYcAZIPySud6U5BtJnxg-TSuJ&_nc_ohc=QJFyBp_fpU4Q7kNvwEK5aa5&_nc_oc=AdoXkCDZ6IV2xRFAA3_0MF55UKAjE51hAy0wOH90ZoDtvROxY4lOAbk6eKELQrKKbFrOC9H44ypr2NTKwXW0toV9&_nc_zt=23&_nc_ht=scontent.fntr6-1.fna&_nc_gid=OXlKsEwMlpPX3y0YK1Tj8A&_nc_ss=7b2a8&oh=00_AQGknKEbBOMbGl4xGdnyUSGH8dYxD5e4zgKDHI0wuPi5Tw&oe=6A885A35`,

    url3: `https://scontent.fntr6-1.fna.fbcdn.net/v/t51.82787-15/572651508_18539759977060044_4180743854034087276_n.jpg?stp=c0.158.1440.1440a_dst-jpg_tt6&cstp=mx1440x1440&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeFPlYKorXB08pCNTu3r1sTvq2NFwq7lKh-rY0XCruUqH4BHwmuNwK1RzjfqO9ZXn8SydSznqQVA5SKxCk-BssDH&_nc_ohc=01DHrxbT0GUQ7kNvwHprc_s&_nc_oc=AdqdGDLn_xFZrIlIznfk6tdDTcszs4crggh4jNbsncN89CS7JqdDBNmH_kXLyGHm5za7JOKuJ1rXHADfYGIXS0U2&_nc_zt=23&_nc_ht=scontent.fntr6-1.fna&_nc_gid=GP3FburqGScNoeBSoaPGEg&_nc_ss=7b2a8&oh=00_AQFGBESyMeRqG0X08NOQ6mZ1VcZjUVIeckaZ_bih_8tTOA&oe=6A884D08`,

    url4: `https://scontent.fntr6-5.fna.fbcdn.net/v/t51.82787-15/573595232_18539744449060044_6740437577217501850_n.jpg?stp=c240.0.960.960a_dst-jpg_tt6&cstp=mx960x960&_nc_cat=106&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeFsCkakWoACuENiYLAUU_IN47-gFN6CFuvjv6AU3oIW67LbjdjeFY-nw5vDrpIPMWqxGV3pdx_tt1Q3WDCiPWmZ&_nc_ohc=fL2bEE9VJqsQ7kNvwHMmj0l&_nc_oc=Ados_Yo4Q49Hp2upHl190-C1VYxIUsR2fbVnSGZ0fCQyeh7d9I0TGnjzMcwSwbq9pge5_1-H9gn4O_3WZLf9fR5L&_nc_zt=23&_nc_ht=scontent.fntr6-5.fna&_nc_gid=_jMdUP31PvCeoxRvlk-7pA&_nc_ss=7b2a8&oh=00_AQFeStoyRLWskHweJrhIRkJNBJmAhBW9H9ZFNJA0asE97w&oe=6A88412F`, // Boletos
    vip: true,
    linkVip: `https://jrticket.tickesoft.com/eventos/feria-sabinas-TRddO`,
  },

  {
    slug: "maria-jose",
    imagen: "/Cartelera/maria.avif",
    nombre: "Maria Jose",
    fecha: "18 Septiembre 2026",
    genero: "Pop latino / Dance-pop",
    im: "/Artistas/maria-mv.avif",
    imMobile: "/Artistas/maria-mv.avif",
    hora: "6:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `María José es una de las voces femeninas más reconocidas del pop mexicano. Originaria de Ciudad de México, inició su carrera formando parte del grupo Kabah, una de las agrupaciones pop más importantes de los años 90, antes de comenzar una exitosa etapa como solista.`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `Prefiero Ser Su Amante`,
    can2nom: `Me Equivoque`,
    can3nom: `Lo Que Tenias Conmigo`,
    can4nom: `Resistire`,
    can5nom: `No Soy Una Señora`,

    can1noml: `https://open.spotify.com/intl-es/track/4hdIORk57S3av6dKI9JRDz?si=891da4a287184af2`,
    can2noml: `https://open.spotify.com/intl-es/track/0mjwigpuvO4IAAMtoNoUyQ?si=4009be91273642ff`,
    can3noml: `https://open.spotify.com/intl-es/track/0X6coWomPnfGLXQ6gdi3cI?si=94ed1bfa346f49d2`,
    can4noml: `https://open.spotify.com/intl-es/track/0XFQb7pNfT90A7fRxjMWgz?si=cb4fdf2a81b144d4`,
    can5noml: `https://open.spotify.com/intl-es/track/6NUh68V6ikd96sTiUCH6ID?si=bfb41dd3c1b4413b`,

    // imagenes
    url1: `https://scontent.fntr6-3.fna.fbcdn.net/v/t51.82787-15/681944501_18585206035006588_9019186207490274446_n.webp?stp=c240.0.960.960a_dst-jpg_tt6&cstp=mx960x960&_nc_cat=109&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeEts5wU1i4h25rSjAlaUkKo23lWuQm9Oa_beVa5Cb05r_RjOp5yVixxWToB7qnD6mu7oKyDgTXP2bSFMzP_0EEv&_nc_ohc=jlzEAe--gYAQ7kNvwGX3rWh&_nc_oc=AdqfNFq8wszqoGW9UpJ9skruIbZzrGg5LzDT0zA75EkMPz-8vJdG_X3QFKNDahDjl2zdc3EuuIe2mcsHgylORTqK&_nc_zt=23&_nc_ht=scontent.fntr6-3.fna&_nc_gid=GrE_1GNr18D9HNhvbVLEDw&_nc_ss=7b2a8&oh=00_AQEf7Z6YZmLmKahryYM8XOC4ArBYBmG7Q5Z5sDerEKxXsA&oe=6A8858CB`,

    url2: `https://scontent.fntr6-1.fna.fbcdn.net/v/t51.82787-15/683635031_18585206134006588_2963377374046818405_n.webp?stp=c240.0.960.960a_dst-jpg_tt6&cstp=mx960x960&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeHxXXx2cQqMRhLPqh_YjPDV1v0jlnkyUHfW_SOWeTJQdzIk6DX7ebOLSMVgE2PKx9KjnC_3__kRQQ8m5vj-4D9j&_nc_ohc=8XF4RFThhasQ7kNvwHT06Ei&_nc_oc=AdrVF6-muY-TWtsHtrPi-9u7mPARVwKeG8L9Sqm6Y2E4TbwjnJqyz4H0aDxgQlyZxwYaYa2SHUH_khgo1RSrfNrz&_nc_zt=23&_nc_ht=scontent.fntr6-1.fna&_nc_gid=zmd6DGvta74tgGtFuUxPIA&_nc_ss=7b2a8&oh=00_AQHRL4aoCfOsasFWJhWKfAS8TvrsujdhMDhPAHi9qRw49w&oe=6A883F98`,

    url3: `https://scontent.fntr6-3.fna.fbcdn.net/v/t51.82787-15/655250941_18575633323006588_4421644462598462741_n.webp?stp=c240.0.960.960a_dst-jpg_tt6&cstp=mx960x960&_nc_cat=105&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeE6rxFYPqjgPbUcUcT6WdbBigYUfGXxYtaKBhR8ZfFi1vTBAsbUDH7Jll3AyF9p9H4g_50q3pFmk-NiXrg2f6T6&_nc_ohc=jOBK8qY9FyoQ7kNvwHvOw1-&_nc_oc=Adr2sM4yNZpUGJbTnQDsAsbjopi49UlZfF51ibaNFF_pZMsrYmFlg7L9TWLcXIRMHr8HUZnTtsdZOwh3-uDnnJ4X&_nc_zt=23&_nc_ht=scontent.fntr6-3.fna&_nc_gid=gj_KZBwwZcTn7w1pEPv94Q&_nc_ss=7b2a8&oh=00_AQH0_yGlRrsR5Md1nU-VCCxI_DXRQY2FQxGji0UfjjsZ2A&oe=6A88317E`,

    url4: `https://scontent.fntr6-5.fna.fbcdn.net/v/t51.82787-15/656528246_18575131729006588_6910161953153608713_n.webp?stp=c240.0.960.960a_dst-jpg_tt6&cstp=mx960x960&_nc_cat=102&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeFWsLNCdHPPgWkf3aZvu6nt2HYxN-YACLDYdjE35gAIsCRMlFWwy_Oy_Tuq-pitWLXifXKycgc7gOmqR72xYSY3&_nc_ohc=vY5GKGlwohsQ7kNvwFmMEMT&_nc_oc=AdrW_yNpqFf79CqVtjq_VbHLr_-8ugPvfIqddkZUPxZkuU0Dp33XfYWylWYzoE-OOAX_NwVHwc6YGYNo_whol0VC&_nc_zt=23&_nc_ht=scontent.fntr6-5.fna&_nc_gid=DceXj6tvnkpM1Umlrm8XDg&_nc_ss=7b2a8&oh=00_AQESftd0i7vQ5ELeWtIsv7YRmbsuXSMqfvugVbc36c84Vg&oe=6A883EB4`, // Boletos
    vip: true,
    linkVip: ` https://jrticket.tickesoft.com/eventos/marca-registrada-feriexpo-coah-2026-uLJ6P`,
  },
  {
    slug: "la-casetera",
    imagen: "/Cartelera/casetera.avif",
    nombre: "La Casetera",
    fecha: "19 Septiembre 2026",
    genero: "Pop en español / Dance / Retro",
    im: "/Artistas/casetera-mv.avif",
    imMobile: "/Artistas/casetera-mv.avif",
    hora: "6:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `La Casetera es una agrupación regiomontana que ha conquistado al público con un espectáculo lleno de nostalgia, energía y grandes éxitos de la música popular. Originaria de Monterrey, Nuevo León, su propuesta revive clásicos de los años 80, 90 y 2000, combinando géneros como la cumbia, grupero, tejano y música tropical.`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `Tributo a Grupo Limite Medley`,
    can2nom: `Si Una Vez`,
    can3nom: `Inmortales Medley`,
    can4nom: `Reinas Gruperas Medley`,
    can5nom: `Tributo a Selena Medley`,

    can1noml: `https://open.spotify.com/intl-es/track/63yP7NifUiUARQlBPET4ol?si=7ce295e36cb84d87`,
    can2noml: `https://open.spotify.com/intl-es/track/4eXuwrDaq0sZM5EBbeboL1?si=9564be15fa0146e2`,
    can3noml: `https://open.spotify.com/intl-es/track/3B8XAAB1j59uwrCfXntXcO?si=4da3af9bc27342af`,
    can4noml: `https://open.spotify.com/intl-es/track/4gWlhj49xHA4ixLnjXE1a5?si=234e728f01d54266`,
    can5noml: `https://open.spotify.com/intl-es/track/0H5RMcttSG4lIu7JwAtWHI?si=21d6874c2c0d4ebd`,

    // imagenes
    url1: `https://scontent.fntr6-1.fna.fbcdn.net/v/t39.99422-6/769131163_1051196040640579_4677983859089584476_n.png?stp=c455.0.1820.1820a_dst-jpg_tt6&cstp=mx1820x1820&_nc_cat=101&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeH4Z2dCkyI4Z7HaYvrWrpNGaIXuOKpo1C1ohe44qmjULbib7QjNauPI-BEvLT__nAW03kc8qyEgGgKOpIA1zBe0&_nc_ohc=0IB767BRqZUQ7kNvwEyNxfu&_nc_oc=Adpg42I1ftbq3pQj7WO-1kLfMqfajev8I_2KuCynfdKKGGB30ggbFFm4lmvc5aS2oxbQLKtPR4MxiaamT5uj0bQ-&_nc_zt=14&_nc_ht=scontent.fntr6-1.fna&_nc_gid=ZqGSRx4EZXg9O4K83DYygg&_nc_ss=7b2a8&oh=00_AQH-V3sWiorRrjM4SiThNvPFub88qn0I7AOxMeb8gv4bPw&oe=6A8841EC`,
    url2: `https://scontent.fntr6-3.fna.fbcdn.net/v/t39.99422-6/768372615_28161199030237752_6347115593121741977_n.png?stp=c846.0.2336.2336a_dst-jpg_tt6&cstp=mx2336x2336&_nc_cat=109&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeE3PDvBSaJLl8rLW_ZoDij2EQ2frtQHR0MRDZ-u1AdHQ-2eWK5hggy7KPpAh6S2PWZuuVpLUOnnzHkgOF81qeE5&_nc_ohc=pcU0ZoHhxKAQ7kNvwFLQqkP&_nc_oc=AdpQ-CPo_k8V_RwZlvOSJUC-sBVqAvCoyG7YgCoT6A7uOhlcjmAc63DcdBzKhrjkYn9LNDa0qMlDIkDIvOuVtpEs&_nc_zt=14&_nc_ht=scontent.fntr6-3.fna&_nc_gid=NPAiYORHjvx-QV8PaeGP0A&_nc_ss=7b2a8&oh=00_AQGRwODXf2Ql89MSl1E_lubmT-6p2nZ-GC_GQ3kYSIfRGA&oe=6A884CA6`,
    url3: `https://scontent.fntr6-3.fna.fbcdn.net/v/t39.99422-6/742173118_1888698441801599_7878241898322667225_n.png?stp=c455.0.1820.1820a_dst-jpg_tt6&cstp=mx1820x1820&_nc_cat=111&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeHMllnUrDNqOdqlliU5Gt4hmR7BO9YtmhyZHsE71i2aHJPm7XLnQOxU2EfgU8rxqQpVmGsNkesyvY9f1BjmvOT5&_nc_ohc=mwyuEGuAOY8Q7kNvwGrNpOD&_nc_oc=AdqaFcyKaFX5Kbf2W38DN0-v29zvgPxocUt7z6JrZylYRSdlblwiqVnZM1s2wznD4srzz8G8P5zsm8zF2a8s2k7o&_nc_zt=14&_nc_ht=scontent.fntr6-3.fna&_nc_gid=n4OQkQ-C_tQDBEvFewCncg&_nc_ss=7b2a8&oh=00_AQHFRNb-hrccuf4wVc9x2riCWSufrsaXmQy9Rs8-8uUKxw&oe=6A8824EA`,
    url4: `https://scontent.fntr6-1.fna.fbcdn.net/v/t39.99422-6/778957827_1725786442058206_40586708375326972_n.png?stp=dst-jpg_tt6&cstp=mx4096x2731&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFfQfPq-le0P_wK423LnhH2eZ___I7mqpB5n__8juaqkLEtnz1tyFqgSb8Wy9eWU_jMWhbNW2335rRTiWbhNuaI&_nc_ohc=dfgEtx4FqkoQ7kNvwEbXCWA&_nc_oc=Adp4CShAhUegPcnbEEKMbI0SNyYRcWmQH2wZv7HwrxfIXlfiziEyeHTpjwDuteoxqGELB8Xz18rIc76t3u19srjL&_nc_zt=14&_nc_ht=scontent.fntr6-1.fna&_nc_gid=MX5FiEUiEXvSVYsXZx2oNg&_nc_ss=7b2a8&oh=00_AQGthIcGzeLV_FxRrEFcL3jrFeoqgLnOitgNwJ7_GN2nOA&oe=6A88624E`,
    // Boletos
    vip: true,
    linkVip: ` https://jrticket.tickesoft.com/eventos/marca-registrada-feriexpo-coah-2026-uLJ6P`,
  },
  {
    slug: "la-tropa-estrella",
    imagen: "/Cartelera/estrella.avif",
    nombre: "La Tropa Estrella",
    fecha: "20 Septiembre 2026",
    genero: "Cumbia / Tropical / Grupero",
    im: "/Artistas/estrella.avif",
    imMobile: "/Artistas/estrella.avif",
    hora: "6:00 PM",
    lugar: "Recinto Ferial Sabinas, Coahuila",
    // Info
    info: `La Tropa Estrella es una agrupación de música tropical y cumbia originaria de Piedras Negras, Coahuila, formada por integrantes de la familia Hernández. Su propuesta se caracteriza por un sonido completamente bailable, con una fuerte influencia de la cumbia y la música tropical, convirtiéndose en una agrupación reconocida dentro de la escena tropical del norte de México.`,
    facebook: `https://www.facebook.com/conjuntohermanosbarron?locale=es_LA`,
    youtube: `https://youtube.com/channel/UC5NQZOJMDsp1z66ZFu2u2gg?si=Sn-iXa87Tqu5ebSw`,
    spotify: `https://open.spotify.com/intl-es/artist/2kAjmak5w94nKWQO2Q8oYH`,

    // canciones
    can1nom: `Pupurri Colombiano`,
    can2nom: `La segunda De La Prima`,
    can3nom: `Scooby Doo Papa`,
    can4nom: `Ea Ea la Cumbia Buena`,
    can5nom: `Cumbia Coqueta`,

    can1noml: `https://open.spotify.com/intl-es/track/42VmVLLF8xxMgh6JY0PZxL?si=bf6f7a1c4c354561`,
    can2noml: `https://open.spotify.com/intl-es/track/6sTCknu19kv0RPFtVQwvQa?si=ffae83b4f6714d14`,
    can3noml: `https://open.spotify.com/intl-es/track/0WzmVvqlxQW0Xxymw5v2Km?si=311ef4061ca94eef`,
    can4noml: `https://open.spotify.com/intl-es/track/4ph7gyoTRshJuHZ7L3tV5l?si=d43ad744248c4f98`,
    can5noml: `https://open.spotify.com/intl-es/track/4T7CwqwIyQ6StCubzHEjCV?si=e1e89f35fac2487f`,

    // imagenes
    url1: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.99422-6/763119905_3400968340065156_7656672707950580156_n.png?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&_nc_cat=104&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeEr1UBKX7p3Zpuvmt5kl8z7UOw1LYmjulBQ7DUtiaO6UMqW6tPGLE45Wds7A_v74NxDAvyzE7A7XA0sIIxEIq4A&_nc_ohc=dVEOI5nxN4MQ7kNvwGj66cV&_nc_oc=Adp3NnimK-uoTua5BO5MiHa_Fgzd8tmWjcr1MAwGAv24baKNot5tIfleQtMdDVaOcdVJtMxpzmB1CkRairypxNbb&_nc_zt=14&_nc_ht=scontent.fntr6-5.fna&_nc_gid=AOZT8pDM-hQY-rOFdzv5kw&_nc_ss=7b2a8&oh=00_AQHiirbF11ZwR-3KWOnsJdzW6AfA9SX8SkrNUaQiFRPFOw&oe=6A88595B`,
    url2: `https://scontent.fntr6-5.fna.fbcdn.net/v/t39.99422-6/759776556_1017782967796637_267007903903896617_n.png?stp=dst-jpg_tt6&cstp=mx1600x747&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFV4fpnpAJHIf8Zt3IqOtnk7xY4sW2VhZDvFjixbZWFkPgPuYCqghFcb-1SJ5xuuVwLEq1RCo_43zEYwbiEAR8M&_nc_ohc=idVukwhSZdEQ7kNvwHkyuho&_nc_oc=Adprt9Yb--76jbeb-Nbi7QoOKGLpJRCFJAiLZSjm6h4rGGqm5jJx5lJRSL74rr1SEICy0LpLJoRSNwRYVuM_Q7XK&_nc_zt=14&_nc_ht=scontent.fntr6-5.fna&_nc_gid=AjZFJkcC6doIWvt9T4kWvA&_nc_ss=7b2a8&oh=00_AQHGjA1eDt3ZwygYP0tpUXm1DV0-RQSH3jLEVAmRzlFf5A&oe=6A883AC1`,
    url3: `https://scontent.fntr6-3.fna.fbcdn.net/v/t39.99422-6/758133918_27831386809790973_3758526702125792756_n.png?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&_nc_cat=111&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeE-VK394qiiklIMK_sbEWYSffZ3_WT05Z999nf9ZPTlnx3GbEdhnjzOZI2Bgrq1Gyvi_bXBZe3fHGHjbugIEzn-&_nc_ohc=R7_4rVRSjNQQ7kNvwFnKzsS&_nc_oc=AdpjZOnbXq0t4_N0i_Vqca2uzll_JqEhgMayOBP9yYkOplrN8K2GZ1631staVHh1WXexM3_sHAOO26agaJ9KjVrg&_nc_zt=14&_nc_ht=scontent.fntr6-3.fna&_nc_gid=rX-URr0-IFE9ahq9utU8Zg&_nc_ss=7b2a8&oh=00_AQH8SKdqMvTA624NUY4C2TBvRhlukUc8VxU3yvbky-XfMw&oe=6A88581B`,
    url4: `https://scontent.fntr6-3.fna.fbcdn.net/v/t39.99422-6/742278030_1562091055608310_8576332604725276409_n.png?stp=c256.0.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&_nc_cat=111&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeEyKkBOD_lzKA_OyIZfWtfGlFS2lhsWJuiUVLaWGxYm6I0shdQEmi7haDDOkIqXco7raqV9MVb-rg1m_OSx7VEF&_nc_ohc=T3ja5MEgVgUQ7kNvwHVp6Wp&_nc_oc=AdpUH8BRHThTe_lgHL6ChhnVw066F0CIXZZe6Etw5h32JlCt3sf4wrHv6neAPeVsLaYYc0dYIr-6i5vQcvpsuMFf&_nc_zt=14&_nc_ht=scontent.fntr6-3.fna&_nc_gid=b1lpw-gy7xxjfDNmLUPsBQ&_nc_ss=7b2a8&oh=00_AQEsmfnN6ajvViMfTckU2EXZuQre3SpRK4fCcWq24jIbow&oe=6A883AB4`,
    // Boletos
    vip: false,
  },
];
