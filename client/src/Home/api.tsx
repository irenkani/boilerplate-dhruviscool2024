import { postData, putData } from '../util/api';

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

async function addP(
  firstName: string,
  imageURL: string,
  imageTitle: string,
  toxicTrait1: string,
  toxicTrait2: string,
  toxicTrait3: string,
  toxicTrait4: string,
  toxicTrait5: string,
) {
  console.log(imageTitle);
  console.log(firstName);
  await postData('person/add-person', {
    firstName,
    imageURL,
    imageTitle,
    toxicTrait1,
    toxicTrait2,
    toxicTrait3,
    toxicTrait4,
    toxicTrait5,
  });
}

// eslint-disable-next-line import/prefer-default-export
export { logout, selfUpgrade, addP };
