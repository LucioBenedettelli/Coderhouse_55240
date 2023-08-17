document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const modal = document.getElementById("cartModal");
    const closeBtn = document.querySelector(".close");
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");

    const saveToLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const loadFromLocalStorage = () => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : {};
    };

    let cart = loadFromLocalStorage();

    const getPokemonData = async (id) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    const cartIconContainer = document.createElement('div');
    cartIconContainer.classList.add('cart-icon-container');
    document.body.appendChild(cartIconContainer);

    const cartTopIcon = document.createElement('img');
    cartTopIcon.classList.add('cart-icon-top');
    cartTopIcon.src = './carrito.png'; 
    cartIconContainer.appendChild(cartTopIcon);

    const cartItemCount = document.createElement('span');
    cartItemCount.classList.add('cart-item-count');
    cartIconContainer.appendChild(cartItemCount);

    cartTopIcon.addEventListener('click', () => {
        modal.style.display = "block";
    });

    const displayCart = () => {
        cartItems.innerHTML = '';
        let totalCount = 0;  
        for (const [id, {pokemon, quantity}] of Object.entries(cart)) {
            totalCount += quantity;
            const li = document.createElement('li');
            
            const spanText = document.createElement('span');
            spanText.textContent = `${pokemon.name} x ${quantity}`;
            li.appendChild(spanText);

            const deleteIcon = document.createElement('span');
            deleteIcon.textContent = " X";
            deleteIcon.style.cursor = "pointer";
            deleteIcon.style.color = "red";
            deleteIcon.onclick = () => {
                delete cart[id];
                displayCart();
                saveToLocalStorage();
            };
            li.appendChild(deleteIcon);

            cartItems.appendChild(li);
        }
        cartCount.textContent = totalCount;
        cartItemCount.textContent = totalCount; // Actualizar el conteo sobre el ícono
    };

    const addToCart = (pokemon, event) => {
        event.stopPropagation();
        if (!cart[pokemon.id]) {
            cart[pokemon.id] = {
                pokemon: pokemon,
                quantity: 1
            };
        } else {
            cart[pokemon.id].quantity += 1;
        }
        displayCart();
        saveToLocalStorage();
    };

    const createCard = (pokemon) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.addEventListener('click', (event) => {
            addToCart(pokemon, event);
        });

        const img = document.createElement('img');
        img.src = pokemon.sprites.front_default;

        const title = document.createElement('h2');
        title.classList.add('card-title');
        title.textContent = `${pokemon.id}. ${pokemon.name}`;

        card.appendChild(img);
        card.appendChild(title);
        container.appendChild(card);
    };

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    const loadPokemons = async (amount = 10) => {
        for (let i = 1; i <= amount; i++) {
            const pokemonData = await getPokemonData(i);
            createCard(pokemonData);
        }
    };

    loadPokemons().then(() => {
        displayCart();
    });
});
