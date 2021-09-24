export async function getBudgetAsync(): Promise<any> {
  return new Promise((resolve, _) => {
    resolve({
      shopping: 150,
      food: 210,
      utlities: 100,
    });
  });
}

// Write an interface here
interface Budget {
  [category: string]: number;
}

async function getBudget() {
  const result: Budget = await getBudgetAsync();
  console.log(result);
}

getBudget();
