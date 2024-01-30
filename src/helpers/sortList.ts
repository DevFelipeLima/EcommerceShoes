type ProductProp = {
  id: number;
  name: string;
  dateInclusion: Date;
  description: string;
  pricing: number;
  image: string;
};

type Order = "asc" | "desc";

export const sortList = (list: ProductProp[], order: Order): ProductProp[] => {
  const sortedList = [...list];

  sortedList.sort((a, b) => {
    if (order === "asc") {
      return a.pricing - b.pricing;
    } else if (order === "desc") {
      return b.pricing - a.pricing;
    }

    return 0;
  });

  return sortedList;
};

export const sortListByDate = (
  list: ProductProp[],
  order: Order
): ProductProp[] => {
  const sortedList = [...list];

  sortedList.sort((a, b) => {
    const dateA = a.dateInclusion.getTime();
    const dateB = b.dateInclusion.getTime();

    if (order === "asc") {
      return dateA - dateB;
    } else if (order === "desc") {
      return dateB - dateA;
    }

    return 0;
  });

  return sortedList;
};
