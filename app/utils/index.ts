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
  const response = await fetch(url, {
    next: {
      revalidate: 60, // 1 minute
    },
  });
  const data = await response.json();
  return data;
}

export async function getDataSingle(url: string) {
  const response = await fetch(url, {
    next: {
      revalidate: 0, // 1 minutes
    },
  });
  const data = await response.json();
  return data;
}
