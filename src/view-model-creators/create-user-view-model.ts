import { User, UserDocument } from '../models/user-model';
import createCartItemViewModel, { CartItemViewModel } from './create-cart-item-view-model';

export type UserViewModel = Omit<User, 'password' | 'cartItems'> & {
  id: string,
  cartItems: CartItemViewModel[],
};

const createUserViewModel = (userDoc: UserDocument): UserViewModel => ({
  id: userDoc._id.toString(),
  email: userDoc.email,
  role: userDoc.role,
  cartItems: userDoc.cartItems.map(createCartItemViewModel),
  name: userDoc.name,
  surname: userDoc.surname,
  img: userDoc.img,
  createdAt: userDoc.createdAt,
  updatedAt: userDoc.updatedAt,
});

export default createUserViewModel;
