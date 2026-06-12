const city_list = {
  "London": [
    "10 Downing Street, Westminster, London SW1A 2AA",
    "221B Baker Street, Marylebone, London NW1 6XE",
    "1 Trafalgar Square, London WC2N 5DN",
    "30 St Mary Axe, London EC3A 8EP",
    "15 Camden High Street, Camden, London NW1 0JH"
  ],
  "Manchester": [
    "1 Deansgate, Manchester M3 1WA",
    "25 Oxford Road, Manchester M1 5QA",
    "8 Piccadilly Gardens, Manchester M1 1RG",
    "42 Wilmslow Road, Manchester M14 5TQ",
    "3 Spinningfields, Manchester M3 3AP"
  ],
  "Birmingham": [
    "1 Victoria Square, Birmingham B1 1BD",
    "15 New Street, Birmingham B2 4QA",
    "27 Broad Street, Birmingham B1 2HF",
    "9 Corporation Street, Birmingham B2 4LP",
    "44 Bull Street, Birmingham B4 6AF"
  ],
  "Edinburgh": [
    "1 Royal Mile, Edinburgh EH1 1RE",
    "23 Princes Street, Edinburgh EH2 2AN",
    "8 Grassmarket, Edinburgh EH1 2JU",
    "15 George Street, Edinburgh EH2 2PF",
    "5 Leith Walk, Edinburgh EH6 8LN"
  ],
  "Glasgow": [
    "1 Buchanan Street, Glasgow G1 2FF",
    "12 Sauchiehall Street, Glasgow G2 3JD",
    "20 Argyle Street, Glasgow G2 8BG",
    "7 Byres Road, Glasgow G12 8AH",
    "33 Merchant City, Glasgow G1 1LP"
  ],
  "Liverpool": [
    "1 Albert Dock, Liverpool L3 4AA",
    "10 Bold Street, Liverpool L1 4DN",
    "5 Mathew Street, Liverpool L2 6RE",
    "22 Hope Street, Liverpool L1 9BQ",
    "18 Renshaw Street, Liverpool L1 2SA"
  ],
  "Bristol": [
    "1 Park Street, Bristol BS1 5HX",
    "9 Corn Street, Bristol BS1 1HT",
    "14 Whiteladies Road, Bristol BS8 2QB",
    "6 King Street, Bristol BS1 4EQ",
    "30 Gloucester Road, Bristol BS7 8BG"
  ],
  "Leeds": [
    "1 Briggate, Leeds LS1 6HD",
    "12 The Headrow, Leeds LS1 8TL",
    "8 Park Row, Leeds LS1 5HD",
    "20 Call Lane, Leeds LS1 6DT",
    "5 Albion Street, Leeds LS1 6JL"
  ],
  "Oxford": [
    "1 High Street, Oxford OX1 4AA",
    "10 Broad Street, Oxford OX1 3AS",
    "5 Cornmarket Street, Oxford OX1 3HA",
    "22 St Aldates, Oxford OX1 1BT",
    "8 Turl Street, Oxford OX1 3DH"
  ],
  "Cambridge": [
    "1 King's Parade, Cambridge CB2 1SJ",
    "12 Trinity Street, Cambridge CB2 1TB",
    "5 Market Hill, Cambridge CB2 3NJ",
    "18 Bridge Street, Cambridge CB2 1UJ",
    "7 Mill Road, Cambridge CB1 2AD"
  ]
};


const search = document.getElementById("city_search");
const menu = document.getElementById('search_menu');

if (search) {
    search.addEventListener("input", (e) => {
        menu.innerHTML = ""; // очищаем меню перед новым поиском
        const query = e.target.value.toLowerCase();
        let matches=0
        for (const city of Object.keys(city_list)) {
            if (query !== "" && city.toLowerCase().includes(query)) {
                const addresses = city_list[city];
                matches++
                for (const address of addresses) {
                    const item = document.createElement('div');
                    item.classList.add("search_item");
                    item.textContent = address;
                    menu.appendChild(item);
                }
            }
        }
        if(matches!=0){
            menu.classList.add("show")
        }else {
            menu.classList.remove("show");
        }
    });
}