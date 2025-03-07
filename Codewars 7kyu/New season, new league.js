function premierLeagueStandings(teamStandings) {
    const keys = Object.keys(teamStandings);  // Mengambil semua posisi (tidak dipakai langsung, jadi bisa dihapus)
    const values = Object.values(teamStandings);  // Mengambil semua nama tim
    const firstTeam = teamStandings[1];  // Mengambil tim peringkat pertama
  
    // Mengambil tim lain, menghapus tim pertama, lalu mengurutkannya secara alfabet
    const sortedTeams = values.filter(team => team !== firstTeam).sort();  
  
    let newTable = {};  // Objek baru untuk menyimpan hasil
    newTable[1] = firstTeam;  // Menetapkan peringkat pertama tetap sama
  
    let position = 2;  // Mulai dari peringkat kedua
    sortedTeams.forEach(team => {
      newTable[position] = team;
      position++;  // Geser ke posisi berikutnya
    });
  
    return newTable;  // Return objek hasil akhir di luar loop
  }
  
  
  
  console.log(premierLeagueStandings({1:'Arsenal'}), {1:'Arsenal'}, 'Should return Arsenal as position 1')
  console.log(premierLeagueStandings({2:'Arsenal', 3:'Accrington Stanley', 1:'Leeds United'}), {3:'Arsenal', 2:'Accrington Stanley', 1:'Leeds United'}, 'Should return team in position 1 last season as #1 and all other teams in alphabetical order!')
  console.log(premierLeagueStandings({1:'Leeds United', 2:'Liverpool', 3:'Manchester City', 4:'Coventry', 5:'Arsenal'}), {1:'Leeds United', 2:'Arsenal', 3:'Coventry', 4:'Liverpool', 5:'Manchester City'}, 'Should return team in position 1 last season as #1 and all other teams in alphabetical order!')