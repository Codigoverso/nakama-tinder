export interface Dish {
  id: number;
  name: string;
  description: string;
  chef: string;
  stand: string;
  tags: string[];
  image: string;
}

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Tataki de Atun Rojo",
    description: "Soy intenso, fresco y me gusta el rollo asiatico. Atun rojo con soja, sesamo tostado y un toque de wasabi que te va a dejar sin aliento.",
    chef: "Chef Maria Lopez",
    stand: "Puesto 1 - Mar & Brasa",
    tags: ["Pescado", "Asiatico", "Sin gluten"],
    image: "/dishes/dish-1.jpg"
  },
  {
    id: 2,
    name: "Cochinillo Confitado",
    description: "Llevo 12 horas preparandome para esta cita. Cochinillo lento con pure de manzana, Pedro Ximenez y una piel crujiente que no podras resistir.",
    chef: "Chef Antonio Garcia",
    stand: "Puesto 2 - El Fogon",
    tags: ["Carne", "Tradicional", "Sin gluten"],
    image: "/dishes/dish-2.jpg"
  },
  {
    id: 3,
    name: "Risotto de Boletus",
    description: "Cremoso, elegante y con un toque salvaje. Arroz carnaroli con boletus, trufa negra rallada y parmesano de 36 meses. Una relacion para quedarse.",
    chef: "Chef Laura Fernandez",
    stand: "Puesto 3 - Bosque Umami",
    tags: ["Vegetariano", "Italiano", "Setas"],
    image: "/dishes/dish-3.jpg"
  },
  {
    id: 4,
    name: "Pulpo a la Parrilla",
    description: "Vengo de Galicia, me gusta el fuego y tengo ocho razones para conquistarte. Braseado con hummus de pimenton y aceite de hierbas.",
    chef: "Chef Carlos Ruiz",
    stand: "Puesto 4 - Atlantico",
    tags: ["Marisco", "Parrilla", "Sin gluten"],
    image: "/dishes/dish-4.jpg"
  },
  {
    id: 5,
    name: "Tarta de Queso Vasca",
    description: "Dicen que soy el mejor postre del pais. Cremosa por fuera, intensa por dentro, con frutos rojos y crumble. No busco algo serio, busco repetir.",
    chef: "Chef Elena Martinez",
    stand: "Puesto 5 - Dulce Tentacion",
    tags: ["Postre", "Vasco", "Vegetariano"],
    image: "/dishes/dish-5.jpg"
  }
];
