// Sélection des éléments du DOM
const listProducts = document.querySelector('.list-products');
const totalPriceElement = document.querySelector('.total');

// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll('.card').forEach(card => {
        const quantity = parseInt(card.querySelector('.quantity').textContent);
        const unitPrice = parseFloat(card.querySelector('.unit-price').textContent);
        totalPrice += quantity * unitPrice;
    });
    totalPriceElement.textContent = `${totalPrice} $`;
}

// événements pour ajouter et retirer la quantité
listProducts.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('fa-plus-circle')) {
        const quantityElement = target.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
        updateTotalPrice();
    }

    if (target.classList.contains('fa-minus-circle')) {
        const quantityElement = target.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
            quantityElement.textContent = quantity - 1;
            updateTotalPrice();
        }
    }
});

// événements pour supprimer un article
listProducts.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('fa-trash-alt')) {
        const card = target.closest('.card');
        card.remove();
        updateTotalPrice();
    }
});

// fonction pour aimer un article
listProducts.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('fa-heart')) {
        target.classList.toggle('liked');
        if (target.classList.contains('liked')) {
            target.style.color = 'red';
        } else {
            target.style.color = 'black';
        }
    }
});

// pour l'initialisation du prix total
updateTotalPrice();