const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const modeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

modeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variable');
    
    modeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
    modeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
})
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productNumber}</td>
                        <td>${order.productName}</td>
                        <td>${order.paymentStatus}</td>
                        <td class=" ${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : order.shipping === 'Delivered' ? 'success' : 'primary' }"> ${order.shipping} </td>
                        <td class="primary">Details</td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})