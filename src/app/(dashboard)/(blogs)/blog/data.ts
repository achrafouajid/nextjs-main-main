import { faker } from "@faker-js/faker";
export default function generate() {
  return Array.from(Array(100).keys()).map((e) => ({
    id: e,
    date: faker.date.anytime().toString(),
    title: faker.lorem.sentence(),
    image: faker.image.urlLoremFlickr({
      category: faker.science.chemicalElement().name,
    }),
    content: faker.lorem.paragraphs(),
  }));
}
