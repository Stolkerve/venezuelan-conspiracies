import faker from "faker";


export interface HashMap<T> {
  [key:string]:T
}

export interface conspiracy {
  title:string, body:string
}


/*
export const conspireciesList:HashMap<conspiracy[]> = {};

for (let i = 0; i < listOfStates.length; i++) {
  conspireciesList[listOfStates[i]] = [{
    title: faker.name.title(),
    body: faker.lorem.paragraph()
  }]
}

*/