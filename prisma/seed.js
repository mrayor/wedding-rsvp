const { relative } = require("path");

const { PrismaClient } = require("@prisma/client");

const USERS = [
  {
    name: "Mrs Adesanya",
    tableNumber: "1",
    relation: "Groom's Mother",
  },
  {
    name: "Mr Adesanya",
    tableNumber: "1",
    relation: "Groom's Father",
  },
  {
    name: "Mrs Adesanya (Mummy Bayo)",
    tableNumber: "1",
    relation: "Groom's Step-Mother",
  },
  {
    name: "Mrs Adegbuyi",
    tableNumber: "1",
    relation: "Family",
  },
  {
    name: "Mr Adubi",
    tableNumber: "1",
    relation: "Family",
  },
  {
    name: "Mrs Adubi",
    tableNumber: "1",
    relation: "Family",
  },
  {
    name: "Yetunde Osho",
    tableNumber: "1",
    relation: "Family",
  },
  {
    name: "Wole Osho",
    tableNumber: "1",
    relation: "Family",
  },
  {
    name: "Mr Adesanya (Uncle)",
    tableNumber: "2",
    relation: "Family",
  },
  {
    name: "Mrs Adesanya (Uncle's Wife)",
    tableNumber: "2",
    relation: "Family",
  },
  {
    name: "Mr Fatai",
    tableNumber: "2",
    relation: "Family",
  },
  {
    name: "Mrs Fatai",
    tableNumber: "2",
    relation: "Family",
  },
  {
    name: "Mrs Fatai (Second Wife)",
    tableNumber: "2",
    relation: "Family",
  },
  {
    name: "Alhaji Yusuf",
    tableNumber: "2",
    relation: "Family",
  },
  {
    name: "Alhaja Yusuf",
    tableNumber: "2",
    relation: "Family",
  },
  {
    name: "Mrs Adefoluwe",
    tableNumber: "2",
    relation: "Family",
  },
  {
    name: "Joko Adesanya",
    tableNumber: "3",
    relation: "Family",
  },
  {
    name: "Mrs Kehinde (Mummy Bisola)",
    tableNumber: "3",
    relation: "Family",
  },
  {
    name: "Mr Kehinde (Daddy Bisola)",
    tableNumber: "3",
    relation: "Family",
  },
  {
    name: "Iya Banwo",
    tableNumber: "3",
    relation: "Family",
  },
  {
    name: "Mr Adefoluwe Adebayo",
    tableNumber: "3",
    relation: "Family",
  },
  {
    name: "Iya Funlayo ",
    tableNumber: "3",
    relation: "Family",
  },
  {
    name: "Adesanya 1",
    tableNumber: "3",
    relation: "Family",
  },
  {
    name: "Adesanya 2",
    tableNumber: "3",
    relation: "Family",
  },
  {
    name: "Mama Adesanya",
    tableNumber: "3",
    relation: "Family",
  },
  {
    name: "Aunty Titi",
    tableNumber: "3",
    relation: "Family",
  },
  {
    name: "Mr Afolabi",
    tableNumber: "4",
    relation: "Family",
  },
  {
    name: "Aunty Mope ",
    tableNumber: "4",
    relation: "Family",
  },
  {
    name: "Mr Olayiwola (Baba Ibeji)",
    tableNumber: "4",
    relation: "Family",
  },
  {
    name: "Mrs Olayiwola (Baba Ibeji Wife)",
    tableNumber: "4",
    relation: "Family",
  },
  {
    name: "Mrs Afolabi",
    tableNumber: "4",
    relation: "Family",
  },
  {
    name: "Princess Osunbajo",
    tableNumber: "4",
    relation: "Family",
  },
  {
    name: "Prince Ifebajo",
    tableNumber: "4",
    relation: "Family",
  },
  {
    name: "Mummy Simi",
    tableNumber: "4",
    relation: "Family",
  },
  {
    name: "Kayode Adesanya",
    tableNumber: "5",
    relation: "Sibling",
  },
  {
    name: "Skizzy",
    tableNumber: "5",
    relation: "Sibling Friend",
  },
  {
    name: "Ade +1",
    tableNumber: "5",
    relation: "Sibling Friend",
  },
  {
    name: "Skizzy +1",
    tableNumber: "5",
    relation: "Sibling Friend",
  },
  {
    name: "Lanre Adesanya",
    tableNumber: "5",
    relation: "Sibling",
  },
  {
    name: "Ade",
    tableNumber: "5",
    relation: "Sibling Friend",
  },
  {
    name: "Kika Adesanya",
    tableNumber: "5",
    relation: "Sibling Wife",
  },
  {
    name: "Gbotemi Afolabi",
    tableNumber: "5",
    relation: "Cousin",
  },
  {
    name: "Ariyo Adesanya",
    tableNumber: "6",
    relation: "Sibling",
  },
  {
    name: "Demola",
    tableNumber: "6",
    relation: "Sibling Friend",
  },
  {
    name: "Otega",
    tableNumber: "6",
    relation: "Sibling Friend",
  },
  {
    name: "Yetunde",
    tableNumber: "6",
    relation: "Sibling Friend",
  },
  {
    name: "Yomi Aderibigbe",
    tableNumber: "6",
    relation: "Sibling Friend",
  },
  {
    name: "Yomi Aderibigbe +1",
    tableNumber: "6",
    relation: "Sibling Friend",
  },
  {
    name: "Seye Adeyemi",
    tableNumber: "6",
    relation: "Sibling Friend",
  },
  {
    name: "Seye Adeyemi +1",
    tableNumber: "6",
    relation: "Sibling Friend",
  },
  {
    name: "Bola Adubi",
    tableNumber: "7",
    relation: "Cousin",
  },
  {
    name: "Damilola Adesanya",
    tableNumber: "7",
    relation: "Sibling",
  },
  {
    name: "Sewa Ojibah",
    tableNumber: "7",
    relation: "Sibling Friend",
  },
  {
    name: "Yinka",
    tableNumber: "7",
    relation: "Sibling Friend",
  },
  {
    name: "Kehinde Adigun",
    tableNumber: "7",
    relation: "Sibling Friend",
  },
  {
    name: "Emeka",
    tableNumber: "7",
    relation: "Sibling Friend",
  },
  {
    name: "Kayinoluwa Afolabi",
    tableNumber: "7",
    relation: "Cousin",
  },
  {
    name: "Dejavu",
    tableNumber: "7",
    relation: "Friend",
  },
  {
    name: "Bayo Adesanya",
    tableNumber: "8",
    relation: "Sibling",
  },
  {
    name: "Pelumi",
    tableNumber: "8",
    relation: "Sibling",
  },
  {
    name: "Demilade",
    tableNumber: "8",
    relation: "Sibling",
  },
  {
    name: "Tammie",
    tableNumber: "8",
    relation: "Sibling",
  },
  {
    name: "Daniel",
    tableNumber: "8",
    relation: "Cousin",
  },
  {
    name: "Taiwo",
    tableNumber: "8",
    relation: "Sibling",
  },
  {
    name: "Precious",
    tableNumber: "8",
    relation: "Sibling",
  },
  {
    name: "Nike",
    tableNumber: "8",
    relation: "Cousin",
  },
  {
    name: "Mercy",
    tableNumber: "8",
    relation: "Sibling",
  },
  {
    name: "Nathaniel",
    tableNumber: "8",
    relation: "Sibling",
  },
  {
    name: "Tomi Kolawole",
    tableNumber: "9",
    relation: "Friend",
  },
  {
    name: "Olarinde Olokuntoye",
    tableNumber: "9",
    relation: "Friend",
  },
  {
    name: "Favour Adenugba",
    tableNumber: "9",
    relation: "Friend",
  },
  {
    name: "Oyinye (Tomi +1)",
    tableNumber: "9",
    relation: "Friend",
  },
  {
    name: "Victor Ademu",
    tableNumber: "9",
    relation: "Friend",
  },
  {
    name: "Sangosanya Tobi",
    tableNumber: "9",
    relation: "Friend",
  },
  {
    name: "Bowo",
    tableNumber: "9",
    relation: "Friend",
  },
  {
    name: "Bowo + 1",
    tableNumber: "9",
    relation: "Friend",
  },
  {
    name: "Oluwaseun A",
    tableNumber: "10",
    relation: "Friend",
  },
  {
    name: "Oyindamola F",
    tableNumber: "10",
    relation: "Friend",
  },
  {
    name: "Femi Adeyemi",
    tableNumber: "10",
    relation: "Friend",
  },
  {
    name: "Ife Adeyemi",
    tableNumber: "10",
    relation: "Friend",
  },
  {
    name: "Bolu Adeyinka",
    tableNumber: "10",
    relation: "Friend",
  },
  {
    name: "Micheal Idowu",
    tableNumber: "10",
    relation: "Friend",
  },
  {
    name: "Bisola Kehinde",
    tableNumber: "10",
    relation: "Friend",
  },
  {
    name: "Inumidun",
    tableNumber: "10",
    relation: "Friend",
  },
  {
    name: "Caleb",
    tableNumber: "11",
    relation: "Friend",
  },
  {
    name: "Ife Ayodele",
    tableNumber: "11",
    relation: "Friend",
  },
  {
    name: "Fafiolu Femi",
    tableNumber: "11",
    relation: "Friend",
  },
  {
    name: "Toriola Deji",
    tableNumber: "11",
    relation: "Friend",
  },
  {
    name: "Toriola Deji +1",
    tableNumber: "11",
    relation: "Friend",
  },
  {
    name: "Osuntogun Damilola (Pdawin)",
    tableNumber: "12",
    relation: "Friend",
  },
  {
    name: "Otizz",
    tableNumber: "12",
    relation: "Friend",
  },
  {
    name: "Authority",
    tableNumber: "12",
    relation: "Friend",
  },
  {
    name: "Dipo Adubi",
    tableNumber: "12",
    relation: "Cousin",
  },
  {
    name: "Mary Adubi",
    tableNumber: "12",
    relation: "Cousin Wife",
  },
  {
    name: "Segun Adeyemo",
    tableNumber: "12",
    relation: "Friend",
  },
  {
    name: "Ope Adeyemo",
    tableNumber: "12",
    relation: "Friend",
  },
  {
    name: "Segun Adeyemo +1",
    tableNumber: "12",
    relation: "Friend",
  },
  {
    name: "Dimeji Adubi",
    tableNumber: "13",
    relation: "Cousin",
  },
  {
    name: "Dimeji Adubi +1",
    tableNumber: "13",
    relation: "Cousin Wife",
  },
  {
    name: "Mr Ify",
    tableNumber: "13",
    relation: "Cousin Friend",
  },
  {
    name: "Mrs Ify",
    tableNumber: "13",
    relation: "Cousin Friend",
  },
  {
    name: "Mr Prince",
    tableNumber: "13",
    relation: "Cousin Friend",
  },
  {
    name: "Lolade Adeyemo",
    tableNumber: "13",
    relation: "Friend",
  },
  {
    name: "Mrs Prince",
    tableNumber: "13",
    relation: "Cousin Friend",
  },
  {
    name: "Victoria Akinola",
    tableNumber: "13",
    relation: "Friend",
  },
  {
    name: "Dynamic Elite Club 1",
    tableNumber: "14",
    relation: "Dynamic Elite Club",
  },
  {
    name: "Dynamic Elite Club 2",
    tableNumber: "14",
    relation: "Dynamic Elite Club",
  },
  {
    name: "Dynamic Elite Club 3",
    tableNumber: "14",
    relation: "Dynamic Elite Club",
  },
  {
    name: "Dynamic Elite Club 4",
    tableNumber: "14",
    relation: "Dynamic Elite Club",
  },
  {
    name: "Dynamic Elite Club 5",
    tableNumber: "14",
    relation: "Dynamic Elite Club",
  },
  {
    name: "Dynamic Elite Club 6",
    tableNumber: "14",
    relation: "Dynamic Elite Club",
  },
  {
    name: "Dynamic Elite Club 7",
    tableNumber: "14",
    relation: "Dynamic Elite Club",
  },
  {
    name: "Dynamic Elite Club 8",
    tableNumber: "14",
    relation: "Dynamic Elite Club",
  },
  {
    name: "Dynamic Elite Club 9",
    tableNumber: "14",
    relation: "Dynamic Elite Club",
  },
  {
    name: "Dynamic Elite Club 10",
    tableNumber: "14",
    relation: "Dynamic Elite Club",
  },
  {
    name: "Mrs Fadayiro",
    tableNumber: "15",
    relation: "Guest",
  },
  {
    name: "Mrs Oligie",
    tableNumber: "15",
    relation: "Guest",
  },
  {
    name: "Mrs Olawale",
    tableNumber: "15",
    relation: "Guest",
  },
  {
    name: "Mrs Balogun",
    tableNumber: "15",
    relation: "Guest",
  },
  {
    name: "Mrs Kojeku",
    tableNumber: "15",
    relation: "Guest",
  },
  {
    name: "Mrs Sogunle",
    tableNumber: "15",
    relation: "Guest",
  },
  {
    name: "Mrs Ojelade",
    tableNumber: "15",
    relation: "Guest",
  },
  {
    name: "Mrs Soyoye",
    tableNumber: "15",
    relation: "Guest",
  },
  {
    name: "Miss Oyefesobi",
    tableNumber: "16",
    relation: "Guest",
  },
  {
    name: "Mrs Oyebiyi",
    tableNumber: "16",
    relation: "Guest",
  },
  {
    name: "Mrs Akibola",
    tableNumber: "16",
    relation: "Guest",
  },
  {
    name: "Mrs Ayanbode",
    tableNumber: "16",
    relation: "Guest",
  },
  {
    name: "Mrs Olufade",
    tableNumber: "16",
    relation: "Guest",
  },
  {
    name: "Mrs Dosunmu",
    tableNumber: "16",
    relation: "Guest",
  },
  {
    name: "Dns Aikhuele",
    tableNumber: "16",
    relation: "Guest",
  },
  {
    name: "Mrs Okegbemi",
    tableNumber: "16",
    relation: "Guest",
  },
  {
    name: "Mrs Akinmadojutimi",
    tableNumber: "17",
    relation: "Guest",
  },
  {
    name: "Bukky Oshin",
    tableNumber: "17",
    relation: "Guest",
  },
  {
    name: "Mr Soile",
    tableNumber: "17",
    relation: "Guest",
  },
  {
    name: "Mrs Soile",
    tableNumber: "17",
    relation: "Guest",
  },
  {
    name: "Deacon Babajide",
    tableNumber: "17",
    relation: "Guest",
  },
  {
    name: "Mrs Babajide",
    tableNumber: "17",
    relation: "Guest",
  },
  {
    name: "Mrs Oluwayinka",
    tableNumber: "17",
    relation: "Guest",
  },
  {
    name: "Mr Badejo",
    tableNumber: "18",
    relation: "Guest",
  },
  {
    name: "Mrs Badejo",
    tableNumber: "18",
    relation: "Guest",
  },
  {
    name: "Mr Dami",
    tableNumber: "18",
    relation: "Guest",
  },
  {
    name: "Mrs Dami",
    tableNumber: "18",
    relation: "Guest",
  },
  {
    name: "Mr Idowu",
    tableNumber: "18",
    relation: "Guest",
  },
  {
    name: "Mrs Idowu",
    tableNumber: "18",
    relation: "Guest",
  },
  {
    name: "Mr Tofade",
    tableNumber: "18",
    relation: "Guest",
  },
  {
    name: "Mrs Tofade",
    tableNumber: "18",
    relation: "Guest",
  },
  {
    name: "Prof Oladapo",
    tableNumber: "19",
    relation: "Guest",
  },
  {
    name: "Mrs Oladapo",
    tableNumber: "19",
    relation: "Guest",
  },
  {
    name: "Taofeek Adedeji",
    tableNumber: "19",
    relation: "Guest",
  },
  {
    name: "Miss Omowunmi",
    tableNumber: "19",
    relation: "Guest",
  },
  {
    name: "Mr Osilojo",
    tableNumber: "20",
    relation: "Bride's Father",
  },
  {
    name: "Mrs Osilojo",
    tableNumber: "20",
    relation: "Bride's Mother",
  },
  {
    name: "Grandma Eleni (GrandMother)",
    tableNumber: "20",
    relation: "Family",
  },
  {
    name: "Mom Isolo",
    tableNumber: "20",
    relation: "Family",
  },
  {
    name: "Mom Nurse",
    tableNumber: "20",
    relation: "Family",
  },
  {
    name: "Mama Niyi",
    tableNumber: "20",
    relation: "Family",
  },
  {
    name: "Mr Otusanya",
    tableNumber: "20",
    relation: "Family",
  },
  {
    name: "Mrs Otusanya",
    tableNumber: "20",
    relation: "Family",
  },
  {
    name: "Mama Yemi",
    tableNumber: "21",
    relation: "Family",
  },
  {
    name: "Mr Adenaike (Dad Anu)",
    tableNumber: "21",
    relation: "Family",
  },
  {
    name: "Mrs Adenaike (Mum Anu)",
    tableNumber: "21",
    relation: "Family",
  },
  {
    name: "Mr Adenaike (Bro Wale)",
    tableNumber: "21",
    relation: "Family",
  },
  {
    name: "Iya Silifa",
    tableNumber: "21",
    relation: "Family",
  },
  {
    name: "Iya Silifa's Husband",
    tableNumber: "21",
    relation: "Family",
  },
  {
    name: "Oshinubi 1",
    tableNumber: "21",
    relation: "Family",
  },
  {
    name: "Oshinubi 2",
    tableNumber: "21",
    relation: "Family",
  },
  {
    name: "Daddy Gbenga",
    tableNumber: "22",
    relation: "Family",
  },
  {
    name: "Mr Osilojo (Dad dami)",
    tableNumber: "22",
    relation: "Family",
  },
  {
    name: "Mrs Osilojo (Mum dami)",
    tableNumber: "22",
    relation: "Family",
  },
  {
    name: "Mr Banjoko",
    tableNumber: "22",
    relation: "Family",
  },
  {
    name: "Mrs Banjoko",
    tableNumber: "22",
    relation: "Family",
  },
  {
    name: "Yemi Oludotun",
    tableNumber: "22",
    relation: "Family",
  },
  {
    name: "Kelly Oludotun",
    tableNumber: "22",
    relation: "Family",
  },
  {
    name: "Great & Mighty Taiwo",
    tableNumber: "22",
    relation: "Family",
  },
  {
    name: "Oshinubi 3",
    tableNumber: "23",
    relation: "Family",
  },
  {
    name: "Oshinubi 4",
    tableNumber: "23",
    relation: "Family",
  },
  {
    name: "Oshinubi 5",
    tableNumber: "23",
    relation: "Family",
  },
  {
    name: "Lagos Family 1",
    tableNumber: "23",
    relation: "Family",
  },
  {
    name: "Lagos Family 2",
    tableNumber: "23",
    relation: "Family",
  },
  {
    name: "Bukky",
    tableNumber: "23",
    relation: "Family",
  },
  {
    name: "Mr Taiwo (Dad great)",
    tableNumber: "23",
    relation: "Family",
  },
  {
    name: "Mrs Taiwo (mum Great)",
    tableNumber: "23",
    relation: "Family",
  },
  {
    name: "Mr Fola Osilojo",
    tableNumber: "24",
    relation: "Family",
  },
  {
    name: "Mrs Fola Osilojo",
    tableNumber: "24",
    relation: "Family",
  },
  {
    name: "Mrs Odutola",
    tableNumber: "24",
    relation: "Family",
  },
  {
    name: "Mrs Odutola's Husband",
    tableNumber: "24",
    relation: "Family",
  },
  {
    name: "Mr Israel Osilojo",
    tableNumber: "24",
    relation: "Family",
  },
  {
    name: "Mrs Israel Osilojo",
    tableNumber: "24",
    relation: "Family",
  },
  {
    name: "Mrs Ogunyemi",
    tableNumber: "24",
    relation: "Family",
  },
  {
    name: "Mrs Ogunyemi's Husband",
    tableNumber: "24",
    relation: "Family",
  },
  {
    name: "Mr Israel Osilojo",
    tableNumber: "25",
    relation: "Family",
  },
  {
    name: "Mrs Israel Osilojo",
    tableNumber: "25",
    relation: "Family",
  },
  {
    name: "Mrs Ogunyemi",
    tableNumber: "25",
    relation: "Family",
  },
  {
    name: "Mrs Ogunyemi's Husband",
    tableNumber: "25",
    relation: "Family",
  },
  {
    name: "Mr Muyiwa Osilojo",
    tableNumber: "25",
    relation: "Family",
  },
  {
    name: "Mrs Muyiwa Osilojo",
    tableNumber: "25",
    relation: "Family",
  },
  {
    name: "Olubisi",
    tableNumber: "25",
    relation: "Family",
  },
  {
    name: "Sunday",
    tableNumber: "25",
    relation: "Family",
  },
  {
    name: "Mr Shenaike",
    tableNumber: "26",
    relation: "Father's Friends",
  },
  {
    name: "Mrs Shenaike",
    tableNumber: "26",
    relation: "Father's Friends",
  },
  {
    name: "Mr Orenaike",
    tableNumber: "26",
    relation: "Father's Friends",
  },
  {
    name: "Mrs Orenaike",
    tableNumber: "26",
    relation: "Father's Friends",
  },
  {
    name: "Mr Shittu",
    tableNumber: "26",
    relation: "Father's Friends",
  },
  {
    name: "Mrs Shittu",
    tableNumber: "26",
    relation: "Father's Friends",
  },
  {
    name: "Mr Junaid",
    tableNumber: "26",
    relation: "Father's Friends",
  },
  {
    name: "Mrs Junaid",
    tableNumber: "26",
    relation: "Father's Friends",
  },
  {
    name: "Mr Banjo",
    tableNumber: "27",
    relation: "Father's Friends",
  },
  {
    name: "Mrs Banjo",
    tableNumber: "27",
    relation: "Father's Friends",
  },
  {
    name: "Mr Jegede",
    tableNumber: "27",
    relation: "Father's Friends",
  },
  {
    name: "Mrs Jegede",
    tableNumber: "27",
    relation: "Father's Friends",
  },
  {
    name: "Mum Ayo",
    tableNumber: "27",
    relation: "Father's Friends",
  },
  {
    name: "Daddy Ayo",
    tableNumber: "27",
    relation: "Father's Friends",
  },
  {
    name: "Mr Osonaike",
    tableNumber: "27",
    relation: "Father's Friends",
  },
  {
    name: "Mrs Osonaike",
    tableNumber: "27",
    relation: "Father's Friends",
  },
  {
    name: "Mayowa Osilojo",
    tableNumber: "28",
    relation: "Sibling",
  },
  {
    name: "Esther Osilojo",
    tableNumber: "28",
    relation: "Sibling's Wife",
  },
  {
    name: "Sister Bidemi",
    tableNumber: "28",
    relation: "Friend",
  },
  {
    name: "Segun Odunsi",
    tableNumber: "28",
    relation: "Friend",
  },
  {
    name: "Déborah plus 1",
    tableNumber: "28",
    relation: "Friend",
  },
  {
    name: "Ajayi Toyin",
    tableNumber: "28",
    relation: "Friend",
  },
  {
    name: "Tunde",
    tableNumber: "28",
    relation: "Friend",
  },
  {
    name: "Khaffy Fantastic",
    tableNumber: "28",
    relation: "Friend",
  },
  {
    name: "Bimpe Ajibade",
    tableNumber: "29",
    relation: "Friend",
  },
  {
    name: "Jesuloluwa Olarenwaju",
    tableNumber: "29",
    relation: "Friend",
  },
  {
    name: "Deborah Oluwadara",
    tableNumber: "29",
    relation: "Friend",
  },
  {
    name: "Bolu Banjo",
    tableNumber: "29",
    relation: "Friend",
  },
  {
    name: "TheoGold",
    tableNumber: "29",
    relation: "Friend",
  },
  {
    name: "Dele",
    tableNumber: "29",
    relation: "Friend",
  },
  {
    name: "dele +1",
    tableNumber: "29",
    relation: "Friend",
  },
  {
    name: "Eniola Banjoko",
    tableNumber: "29",
    relation: "Cousin",
  },
  {
    name: "Fisayo Banjoko",
    tableNumber: "30",
    relation: "Cousin",
  },
  {
    name: "Precious Ogunyemi",
    tableNumber: "30",
    relation: "Cousin",
  },
  {
    name: "Esther Taiwo",
    tableNumber: "30",
    relation: "Cousin",
  },
  {
    name: "Tope Adenaike",
    tableNumber: "30",
    relation: "Cousin",
  },
  {
    name: "Fisayo +1",
    tableNumber: "30",
    relation: "Friend",
  },
  {
    name: "Mary Okubanwo",
    tableNumber: "30",
    relation: "Friend",
  },
  {
    name: "Feyisayo Banjoko",
    tableNumber: "30",
    relation: "Cousin",
  },
  {
    name: "Samuel Adenaike",
    tableNumber: "30",
    relation: "Cousin",
  },
  {
    name: "Gbenga Adenaike",
    tableNumber: "31",
    relation: "Cousin",
  },
  {
    name: "Elizabeth Adenaike",
    tableNumber: "31",
    relation: "Cousin",
  },
  {
    name: "Tosin Osilojo",
    tableNumber: "31",
    relation: "Cousin",
  },
  {
    name: "Dami Osilojo",
    tableNumber: "31",
    relation: "Cousin",
  },
  {
    name: "Church fellowship 1",
    tableNumber: "31",
    relation: "Church",
  },
  {
    name: "Church fellowship 2",
    tableNumber: "31",
    relation: "Church",
  },
  {
    name: "Church fellowship 3",
    tableNumber: "31",
    relation: "Church",
  },
  {
    name: "Church fellowship 4",
    tableNumber: "31",
    relation: "Church",
  },
  {
    name: "Church fellowship 5",
    tableNumber: "32",
    relation: "Church",
  },
  {
    name: "Mrs Oredipe",
    tableNumber: "32",
    relation: "Guest",
  },
  {
    name: "Mrs Taiwo",
    tableNumber: "32",
    relation: "Guest",
  },
  {
    name: "Mrs Abass",
    tableNumber: "32",
    relation: "Guest",
  },
  {
    name: "Iya Anu",
    tableNumber: "32",
    relation: "Guest",
  },
  {
    name: "Mrs Liasu",
    tableNumber: "32",
    relation: "Guest",
  },
  {
    name: "Iya Damola",
    tableNumber: "32",
    relation: "Guest",
  },
  {
    name: "Mrs Adewole",
    tableNumber: "32",
    relation: "Guest",
  },
  {
    name: "Mrs Adeleke",
    tableNumber: "33",
    relation: "Guest",
  },
  {
    name: "Baba Owo",
    tableNumber: "33",
    relation: "Guest",
  },
  {
    name: "Iya Owo",
    tableNumber: "33",
    relation: "Guest",
  },
  {
    name: "Mr Oloko",
    tableNumber: "33",
    relation: "Guest",
  },
  {
    name: "Mrs Oloko",
    tableNumber: "33",
    relation: "Guest",
  },
  {
    name: "Mrs Kuye",
    tableNumber: "33",
    relation: "Guest",
  },
  {
    name: "Mr kuye",
    tableNumber: "33",
    relation: "Guest",
  },
  {
    name: "Mrs Okusami",
    tableNumber: "33",
    relation: "Guest",
  },
  {
    name: "Mrs Ayangade",
    tableNumber: "34",
    relation: "Guest",
  },
  {
    name: "Mum Samuel",
    tableNumber: "34",
    relation: "Guest",
  },
  {
    name: "Neighbour 1",
    tableNumber: "34",
    relation: "Guest",
  },
  {
    name: "OLORIRE 1",
    tableNumber: "34",
    relation: "Guest",
  },
  {
    name: "OLORIRE 2",
    tableNumber: "34",
    relation: "Guest",
  },
  {
    name: "OLORIRE 3",
    tableNumber: "34",
    relation: "Guest",
  },
  {
    name: "OLORIRE 4",
    tableNumber: "34",
    relation: "Guest",
  },
  {
    name: "Mrs Badejo Grace Omodele",
    tableNumber: "34",
    relation: "Guest",
  },
  {
    name: "Olayemi Sekinat Omotunde",
    tableNumber: "35",
    relation: "Guest",
  },
  {
    name: "Mrs Adebanjo Adetutu",
    tableNumber: "35",
    relation: "Guest",
  },
  {
    name: "Miss Oresanya Elizabeth Funto",
    tableNumber: "35",
    relation: "Guest",
  },
  {
    name: "Mr Owoeye Sunday Solomon",
    tableNumber: "35",
    relation: "Guest",
  },
  {
    name: "Mrs Olugbewesa Helen Adejoke",
    tableNumber: "35",
    relation: "Guest",
  },
  {
    name: "Mrs Rasheed Risikat Olasimbo",
    tableNumber: "35",
    relation: "Guest",
  },
  {
    name: "Mrs Davies Yemisi Victoria",
    tableNumber: "35",
    relation: "Guest",
  },
  {
    name: "Mrs Jimoh Bukonla Arike",
    tableNumber: "35",
    relation: "Guest",
  },
  {
    name: "Mrs Banjo Olusola Oluwafunke",
    tableNumber: "36",
    relation: "Guest",
  },
  {
    name: "Mr Faniyi Iseoluwa Oluwafemi",
    tableNumber: "36",
    relation: "Guest",
  },
  {
    name: "Mr Akinsola Makinde Isaac",
    tableNumber: "36",
    relation: "Guest",
  },
  {
    name: "Mrs Kuforiji Elizabeth Falilat",
    tableNumber: "36",
    relation: "Guest",
  },
  {
    name: "Mrs Anyah Oluwakemi ",
    tableNumber: "36",
    relation: "Guest",
  },
  {
    name: "Mrs Adebola Rasidat",
    tableNumber: "36",
    relation: "Guest",
  },
  {
    name: "Mrs Sokefun Temitope",
    tableNumber: "36",
    relation: "Guest",
  },
  {
    name: "Mrs Ogunlana Remilekun",
    tableNumber: "36",
    relation: "Guest",
  },
  {
    name: "Mrs Adebiyi Bolajoko",
    tableNumber: "37",
    relation: "Guest",
  },
  {
    name: "Mrs Olaitan Grace",
    tableNumber: "37",
    relation: "Guest",
  },
  {
    name: "Mrs Ogidi Celestine",
    tableNumber: "37",
    relation: "Guest",
  },
  {
    name: "Mrs Adeokun Lateefah ",
    tableNumber: "37",
    relation: "Guest",
  },
  {
    name: "Mrs Ogunfolu Adijat",
    tableNumber: "37",
    relation: "Guest",
  },
  {
    name: "Mrs Oduneye Abosede Temitope",
    tableNumber: "37",
    relation: "Guest",
  },
  {
    name: "Mrs Gaji Olajumoke Basirat",
    tableNumber: "37",
    relation: "Guest",
  },
  {
    name: "Mrs Badejo Adebola Damilola",
    tableNumber: "37",
    relation: "Guest",
  },
  {
    name: "Mrs Owolabi Rebecca",
    tableNumber: "38",
    relation: "Guest",
  },
  {
    name: "Mr Akintunde Akinbileje Ernest",
    tableNumber: "38",
    relation: "Guest",
  },
  {
    name: "Mrs Ayanbadejo Ismail Omotayo",
    tableNumber: "38",
    relation: "Guest",
  },
  {
    name: "Mrs Amusa Olubunmi Racheal",
    tableNumber: "38",
    relation: "Guest",
  },
  {
    name: "Mrs Adekunle Kehinde Moupe",
    tableNumber: "38",
    relation: "Guest",
  },
  {
    name: "Ewunmi Bukonla Olusola",
    tableNumber: "38",
    relation: "Guest",
  },
  {
    name: "Mrs Balogun Christianah",
    tableNumber: "38",
    relation: "Guest",
  },
  {
    name: "Mrs Ojaetan Anthonia Eyiuche",
    tableNumber: "38",
    relation: "Guest",
  },
  {
    name: "Mrs Ogunyankinnu Deborah",
    tableNumber: "39",
    relation: "Guest",
  },
  {
    name: "Mrs Ademiju Adenike",
    tableNumber: "39",
    relation: "Guest",
  },
];

const prisma = new PrismaClient();

const main = async () => {
  try {
    await prisma.user.deleteMany({});

    await prisma.user.createMany({
      data: USERS,
    });

    console.log(`Database has been seeded.`);
  } catch (error) {
    console.log("Error while seeding database", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

main();
