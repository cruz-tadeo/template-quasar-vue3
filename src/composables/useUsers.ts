import { GetUser, IUser } from 'src/app/users';
import { container } from 'src/config/container';
import { TYPES } from 'src/config/types';
import { ref } from 'vue';

export const useGetUsers = () => {
	const getUser = container.get<GetUser>(TYPES.GetUser);
	const user = ref<IUser>({
		name: '',
		username: '',
		email: '',
		address: {
			street: '',
			suite: '',
			city: '',
			zipcode: '',
			geo: {
				lat: '',
				lng: ''
			}
		},
		phone: '',
		website: '',
		company: {
			name: '',
			catchPhrase: '',
			bs: ''
		}
	});
	const loading = ref(false);

	const fetchUser = async (id: number) => {
		loading.value = true;
		user.value = await getUser.execute(id);
		loading.value = false;
	};

	return {
		user,
		loading,
		fetchUser
	};
};
