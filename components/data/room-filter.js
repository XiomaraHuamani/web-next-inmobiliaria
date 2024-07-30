const roomFilter = {
  filters: [
    {
      id: 1,
      name: "Todo",
      filterData: "filter-item",
    },
    {
      id: 2,
      name: "Departamentos",
      filterData: "Departamento",
    },
    // {
    //   id: 3,
    //   name: "Oficinas",
    //   filterData: "single",
    // },
    // {
    //   id: 4,
    //   name: "Condominios",
    //   filterData: "suite",
    // },
    {
      id: 5,
      name: "Lotes y Terrenos",
      filterData: "Terreno",
    },
  ],

  projects: [
    {
      id: 1,
      image: "/img/departamentos/duplex-lafonda.png",
      title: "Departamento duplex - La fonda",
      price: "134",
      class_s: "col-xl-3 col-lg-4 mt-30",
      filter: ["Departamento"],
    },
    {
      id: 2,
      image: "/img/departamentos/duplex-yanahuara.png",
      title: "Departamento duplex - Yanahuara",
      price: "199",
      class_s: "col-xl-6 col-lg-8 mt-30",
      filter: ["Departamento"],
    },
    {
      id: 3,
      image: "/img/departamentos/departamento-yanahuara.png",
      title: "Departamento Yanahuara",
      price: "319",
      class_s: "col-xl-3 col-lg-4 mt-30",
      filter: ["Departamento"],
    },
    {
      id: 4,
      image: "/img/departamentos/departamento-amoblado.png",
      title: "Departamento amoblado",
      price: "169",
      class_s: "col-xl-6 col-lg-8 mt-30",
      filter: ["Departamento"],
    },
    {
      id: 5,
      image: "/img/departamentos/5tawa.png",
      title: "Terrenos QuintaTawa",
      price: "249",
      class_s: "col-xl-6 mt-30",
      filter: ["Terreno"],
    },
  ],
};

export default roomFilter;
