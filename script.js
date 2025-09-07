document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  
  cards.forEach(card => {
    card.addEventListener("mouseover", () => {
      card.animate([
        { transform: 'translateY(0)', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' },
        { transform: 'translateY(-8px)', boxShadow: '0 8px 15px rgba(0,0,0,0.1)' }
      ], {
        duration: 200,
        fill: 'forwards'
      });
    });

    card.addEventListener("mouseout", () => {
      card.animate([
        { transform: 'translateY(-8px)', boxShadow: '0 8px 15px rgba(0,0,0,0.1)' },
        { transform: 'translateY(0)', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }
      ], {
        duration: 200,
        fill: 'forwards'
      });
    });
  });
});