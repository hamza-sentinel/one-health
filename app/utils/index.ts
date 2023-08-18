export function convertToBase64(
  file: File
): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

export async function getData(url: string) {
  const { count } = await fetch(url + "/getCount").then((res) => res.json());

  const pages = Math.ceil(count / 5);

  let data: any[] = [];
  for (let i = 0; i < pages; i++) {
    const response = await fetch(url + `?page=${i}`, {
      next: {
        revalidate: 60, // 1 minute
      },
    });
    data = [...data, ...(await response.json())];
  }
  return data;
}
