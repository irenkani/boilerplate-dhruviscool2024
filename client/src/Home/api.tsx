import { postData, putData, getData } from '../util/api';

/**
 * Makes a request to the server to logout a user from the current session
 * @returns true if successful, false otherwise
 */
async function logout() {
  const res = await postData('auth/logout');
  if (res.error) return false;
  return true;
}
/**
 * Makes a request to the server to upgrade a self to admin from the current session
 * @returns true if successful, false otherwise
 * PLEASE REMOVE THIS FUNCTION AND BACKEND ENDPOINT UPON DEPLOYMENT
 */
async function selfUpgrade(email: string) {
  const res = await putData('admin/autopromote', { email });
  if (res.error) return false;
  return true;
}

interface personType {
  name: string;
  imageURL: string;
  imageTitle: string;
  trait1: string;
  trait2: string;
  trait3: string;
  trait4: string;
  trait5: string;
}

interface CardConstant {
  name: string;
  imageURL: string;
  imageTitle: string;
  trait1: string;
  trait2: string;
  trait3: string;
  trait4: string;
  trait5: string;
}

async function addP(
  name: string,
  imageURL: string,
  imageTitle: string,
  trait1: string,
  trait2: string,
  trait3: string,
  trait4: string,
  trait5: string,
) {
  console.log(imageTitle);
  console.log(name);
  await postData('person/add-person', {
    name,
    imageURL,
    imageTitle,
    trait1,
    trait2,
    trait3,
    trait4,
    trait5,
  });
}
async function getAllP(
  cards: CardConstant[],
  setCards: React.Dispatch<React.SetStateAction<CardConstant[]>>,
) {
  const response = await getData('person/all-people');
  console.log('updated cards', response.data.data);
  if (!response || !response.data.data) {
    console.error('Unable to get all users');
    return;
  }
  setCards([...cards, ...response.data.data]);
}

// eslint-disable-next-line import/prefer-default-export
export { logout, selfUpgrade, addP, getAllP };
