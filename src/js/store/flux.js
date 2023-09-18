const getState = ({ getStore, getActions, setStore }) => {
	const swApi = "https://swapi.dev/api/";
	return {
		store: {
			characters: [
						
			],
			planets: [

			],
			vehicles:[

			],
			favorites:[
				
			]
		},
		actions: {
			

			loadSomeData: () => {
				
					fetch(swApi + "/people").then(
						res => res.json()
					).then(data => setStore({ characters: data.results }));
					fetch(swApi + "/planets").then(
						res => res.json()
					).then(data => setStore({ planets: data.results }));
					fetch(swApi + "/vehicles").then(
						res => res.json()
					).then(data => setStore({ vehicles: data.results }));
			},
			
			addFavorites: (data) => {
				const store = getStore()
				setStore({favorites: [...store.favorites, data]})
										   
			},

			removeFavorites: (indexFavorite) => {
				const store = getStore()
				setStore({favorites: store.favorites.filter((favorite,index) => indexFavorite !== index )})
			}
		}
	};
};

export default getState;