const data = [
  {
    id: 1,
    categories: "inverter",
    image:
      "https://crosstech.com.ng/wp-content/uploads/2022/02/LUMINOUS-ICRUZE-2.8KVA-24V-INVERTER.jpg",
    tittle: "Lumininous Inverter 2.8KVA/24",
    // model: "2.8KVA/24V",
    price: 310,
    puropose:
      "Opting for a luminous inverter ensures that even during power cuts, your perishables stay fresh. There's no need to worry about spoilage, as the backup power from your inverter restores electricity instantly. Now, let's comprehend how inverters operate during power outages.",
  },
  {
    id: 2,
    categories: "Inverter",
    image:
      "https://crosstech.com.ng/wp-content/uploads/2022/02/LUMINOUS-OPTIMUS.jpg",
    tittle: "Lumininous Inverter 1.6KVA/24V",
    // model: "1.6KVA/24V",
    price: 210,
    puropose:
      "A power inverter changes direct current (DC) power from a battery, usually 12V or 24V, into conventional mains alternating current (AC) power at 230V. This means that you can use one to operate all kinds of devices ... electric lights, kitchen appliances, power tools, TVs, radios, computers, to name just a few.",
  },
  //   infinisolar
  {
    id: 3,
    categories: "Inverter",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-axiotG2wBgXNrRHpDJXXLYivTJfnwAwBTA&s",
    tittle: "InfiniSolar Inverter 3.5KVA/24V",
    // model: "3.5KVA/24V",
    price: 350,
    puropose:
      "InfiniSolar is the technology leader in the solar inverter industry, with a full product line that offers the flexibility necessary to fulfill all the power conversion needs in solar. One-Stop Energy Storage Solution, Provide ODM&OEM Service, 23 Years Inverter Experience.",
  },
  {
    id: 4,
    categories: "Inverter",
    image:
      "https://grecopower.com.ng/wp-content/uploads/2022/11/7d87ec4d24a0518c5d9bd56e060f7b71_medium.jpg",
    tittle: "InfiniSolar Inverter 5KVA/24V",
    // model: "5KVA/24V",
    price: 450,
    puropose:
      "These Powers LED lights, laptops, small kitchen appliances (microwave, toaster, coffee maker), essential electronics (TV, gaming console), power tools, and even some energy-efficient HVAC components",
  },
  {
    id: 5,
    categories: "Inverter",
    image:
      "https://voltronicpower.com/Content/images/product/20210806163623.jpg",
    // model: "5KVA/48V",
    tittle: "InfiniSolar Inverter 5KVA/48V",
    price: 550,
    puropose:
      "Whether you need to run heavy-duty appliances, office equipment, or industrial machinery, this inverter is up to the task, providing you with reliable power for your critical applications.",
  },

  {
    id: 6,
    categories: "Inverter",
    image:
      "https://phozenergy.ng/store/wp-content/uploads/2022/12/A9ynoyfl_rf0xpz_yk.png",
    tittle: "InfiniSolar Inverter 7.5KVA/48V hybrid",
    // model: "7.5KVA/48V hybrid",
    price: 620,
    puropose:
      "The 7.55kVA/120V Genus inverter runs on a battery bank of 10 units of 12V battery. With 200Ah/12V batteries, the Genus 7.5kVA 120V inverter can support your household appliances, up to a freezer. That will cover fans, lighting, TV and other basic appliances.",
  },
  {
    id: 7,
    categories: "Inverter",
    image:
      "https://grecopower.com.ng/wp-content/uploads/2022/11/FELICITY-3KVA-24V-BATTER-INVERETER.png",
    tittle: "Felicity inverter 3.5KVA/24V",
    // model: "3.5KVA/24V",
    price: "",
    puropose:
      "The Felicity 3.5kVA 24V Power inverter is an optimally designed pure sine wave inverter. It is a super efficient, low energy loss Inverter with a low price ",
  },
  {
    id: 8,
    categories: "Inverter",
    image: "",
    tittle: "Felicity Inverter 5KVA/48V",
    // model: "5KVA/48V",
    price: "",
    puropose: "",
  },
  {
    id: 9,
    categories: "Inverter",
    image: "https://kombpower.com/wp-content/uploads/2023/06/31-1.jpg",
    tittle: "Felicity Inverter 5KVA/24V hybrid",
    // model: "5KVA/24V hybrid",
    price: "",
    puropose:
      "With a 5kw inverter, you can power several household appliances simultaneously, such as lights, fans, a refrigerator, a TV, and a computer. However, the exact number and type of appliances will depend on their individual power consumption.",
  },
  //   Mttp
  {
    id: 10,
    categories: "MPPT Charger",
    image:
      "https://pragmarstore.com/wp-content/uploads/2022/06/FELICITY_IVPM10048_PRAGMARSTORE.jpg",
    // model: "6000KVA",
    tittle: "Felicity MTTP 000KVA",
    // model: "6000KVA",
    price: "",
    puropose:
      "MPPT or Maximum Power Point Tracking is algorithm that included in charge controllers used for extracting maximum available power from PV module under certain conditions. The voltage at which PV module can produce maximum power is called �maximum power point� (or peak power voltage).",
  },
  {
    id: 11,
    categories: "MPPT Charger",
    image: "",
    tittle: "Felicity MTTP 45KVA/24V ",
    // model: "45KVA/24V ",
    price: 105,
    puropose: "",
  },
  {
    id: 12,
    categories: "MPPT Charger",
    tittle: "Mtttp 45KVA/24V",
    image:
      "Intelligent maximum power point tracking technology, increases efficiency 25%~30%,three-stage charging optimizes battery performance.",
    // model: "45KVA/24V ",
    price: 180,
    puropose: "",
  },
  {
    id: 13,
    categories: "MPPT Charger",
    image: "",
    tittle: "Felicity Mttp 45KVA/24V",
    // model: "/ ",
    price: 150,
    puropose: "",
  },
  //   Cameras
  {
    id: 14,
    categories: "Solar Camera",
    image: "https://m.media-amazon.com/images/I/61pK7qIqk9L._AC_SL1250_.jpg",
    tittle: "Solar Camera Pt2",
    price: 120,
    puropose:
      "8W Solar Panel + Built-in large capacity lithium battery(not included) dual power supply. Even if it is rainy or cloudy, it will not be powered off.",
  },
  {
    id: 15,
    categories: "Solar Camera",
    image: "https://www.umoteco.com/uploads/VCS09-dual-lens-solar-camera.png",
    tittle: "Doble Lens Solar Camera",
    price: 145,
    puropose:
      "The dual-lens solar camera produced by LS VISION is a zoom security camera with 10x optical zoom, capturing the details of objects and generating ",
  },
  {
    id: 16,
    categories: "Solar Camera",
    image:
      "https://hardwarevillagengr.com/wp-content/uploads/2022/07/PTZ-CCTV-Wireless-Camera-1.jpg",
    tittle: "Solar Camera 4G Cellular",
    price: 150,
    puropose:
      "A 4G solar security camera is a mobile device using 3G/4G LTE network, instead of the WiFi or wired network, to send motion alerts to your phone and deliver live stream wirelessl",
  },
  {
    id: 17,
    categories: "Solar Camera",
    image:
      "https://image.made-in-china.com/229f0j00DEOGuVIHghkw/-20240508-6293609d8cf1da78-461622686683-118166265796428-published-mp4-264-hd-taobao-mp4.webp",
    tittle: "Solar Camera Outdoor",
    price: 150,
    puropose:
      "With wire-free feature, this 4G Cellular security camera is portable and you can easily install it anywhere without WiFi coverage. Connect to the Solar Pane",
  },
  //   Solar Fan
  {
    id: 18,
    categories: "Solar Fan",
    tittle: "Solar Fan 16 Inches",
    image:
      "https://gmcaircon.co.za/wp-content/uploads/2023/09/Rechargeable-Fan-with-solar-panel-450x450.jpg",
    price: 85000,
    puropose:
      "It features LED Lights and also has a full charge and charging indicator light. The rechargeable fan features AC and DC power supply modes and a 5 blade",
  },
  {
    id: 19,
    categories: "Solar Fan",
    image: "https://gennextechnologies.com/storage/2021/12/Solar-Fan1.jpg",
    tittle: "Solar Fan 18 Inches",
    price: 90000,
    puropose:
      "It features LED Lights and also has a full charge and charging indicator light. The rechargeable fan features AC and DC power supply modes and a 5 blade",
  },
  //   Solar Street Light
  {
    id: 20,
    categories: "Solar Street Light",
    image:
      "https://image.made-in-china.com/2f0j00ruKUeLcIbFkD/150W-Solar-Street-Lighting-Solar-Flood-Light.webp",
    tittle: "Short FloodLamp 150W Solar Street Light",
    price: 65,
    puropose:
      "Features of the solar street light: 1. Very easy to install. IP65 Waterproof and stunning quality for outdoor and indoor flood light. ' 2. Provide bright Light",
  },
  {
    id: 21,
    categories: "Solar Street Light",
    image:
      "https://img5217.weyesimg.com/uploads/www.litelsolar.com/images/16619431922328.jpg?imageView2/2/w/800/q/75/format/webp",
    tittle: "Short FloodLamp 150W Solar Street Light",
    price: 80,
    puropose:
      "Features of the solar street light: 1. Very easy to install. IP65 Waterproof and stunning quality for outdoor and indoor flood light. ' 2. Provide bright Light",
  },
  //   Mobile Genarator
  {
    id: 22,
    categories: "Mobile Genarator",
    image:
      "https://i0.wp.com/www.prostarsolar.net/wp-content/uploads/2020/05/PIM500-lithium-battery-solar-generator-500w-mppt.jpg?fit=800800&ssl=1",
    tittle: "Mobile Genarator 500W ",
    price: 450,
    puropose:
      "1.Superior AC loading capacity · 2.Strong structure,portable and practical · 3.Integrated charge & discharge control · 4.Built-in maintenance-free battery,safe ",
  },
  {
    id: 23,
    categories: "Mobile Genarator",
    image: "",
    tittle: "Mobile Genarator 1000W",
    price: 600,
    puropose:
      "1000W Very Small and Portable Gas Gasoline Generator Set with ... 1.5kVA Gasoline Manual Starter 100% Copper Portable Petrol Generator From Green Power.",
  },
  //   Batteries
  {
    id: 24,
    categories: " Batteries",
    image: "https://energymall.ng/wp-content/uploads/2022/02/luminous.jpg",
    tittle: "Lumininious  Batterie",
    price: 335000,
    puropose:
      "The Luminous Tubular is the ideal battery for deep cycle usage with Luminous Inverters and Solar Home UPS. Designed exclusively for inverters and UPS, this is an excellent value for money product that provides the longest duty life with minimal maintenance needs.",
  },
  {
    id: 25,
    categories: " Batteries",
    image:
      "https://powersolutionmall.com/wp-content/uploads/2024/04/agtkMXbt27Jp.png",
    tittle: "Varcas  Batterie",
    price: 305000,
    puropose:
      "Our solar batteries are able to withstand deep discharge, are temperature tolerant and are safe and highly reliable. Batteries from Varcas are affordable",
  },
  //   Solar Panal
  {
    id: 26,
    categories: " Solar Panal",
    image:
      "https://astrumenergy.com.ng/wp-content/uploads/2019/02/Mono-Solar-Panel.jpg",
    tittle: "Solar Panal 350W normal",
    price: 110000,
    puropose:
      "A 350W solar panel is therefore an ideal option for running small devices such as laptops, TVs, juicers, and coffee makers. This panel can be used for camping and other outdoor activities. In fact, most 350W solar panels are portable and foldable such as the BLUETTI PV350 Solar Panel",
  },
  {
    id: 27,
    categories: " Solar Panal",
    image:
      "https://cdn-enoih.nitrocdn.com/kzltgafZecVglpUbyWKFCjKzSdhSUWWa/assets/images/optimized/rev-103eb43/sakopower.com/wp-content/uploads/2022/06/solar-panel-470W-510W-182MM-132CELL-3-500x500.jpg",
    tittle: "Solar Panal 550W Halfcut",
    price: 170000,
    puropose:
      "Advanced Cell Technology: Utilizing half-cut solar cell technology, the panel reduces resistive power loss and improves efficiency",
  },
  {
    id: 28,
    categories: "Solar Panal",
    image:
      "https://s.alicdn.com/@sc04/kf/H7c0344fb354642dc8afc7c59320f25d9x.jpg_300x300.jpg",
    tittle: "Solar Panal 45W Longi Premium",
    price: 145000,
    puropose:
      "Although Longi Solar panels may have a higher initial cost compared to traditional panel types, they are efficient and long-lasting, resulting in significant savings in the long run. Homeowners as well as businesses can make substantial savings on their power bills over the lifespan of the panel system",
  },
  {
    id: 29,
    categories: "",
    image: "",
    tittle: "",
    price: "",
    puropose: "",
  },
  {
    id: 30,
    categories: "",
    image: "",
    tittle: "",
    price: "",
    puropose: "",
  },
  {
    id: 31,
    categories: "",
    image: "",
    tittle: "",
    price: "",
    puropose: "",
  },
  {
    id: 32,
    categories: "",
    image: "",
    tittle: "",
    price: "",
    puropose: "",
  },
  {
    id: 33,
    categories: "",
    image: "",
    tittle: "",
    price: "",
    puropose: "",
  },
];

export default data;
