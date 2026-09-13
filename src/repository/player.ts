const database: PlayerModel[] =[
{id:1,
  name:"Lionel messi",
  club: "paris Saint-Germain",
  nationality: "Argentina",
  position:"Forward",
  statistics:{
    Overall: 93,
    Pace: 85,
    Shooting: 94,
    Passing: 91,
    Dribbling: 95,
    Defending: 38,
    Physical: 65
  },
},
{id:2,
  name:"Cristiano Ronaldo",
  club: "Algum lugar",
  nationality: "Portugal",
  position:"Forward",
  statistics:{
    Overall: 93,
    Pace: 85,
    Shooting: 94,
    Passing: 91,
    Dribbling: 95,
    Defending: 38,
    Physical: 65
  },
},
]


export const findAllPlayers = async (): Promise<PlayerModel[]> =>{
    return database;

};

export const findPlayerById = async(
    id:number
): Promise<PlayerModel | undefined> =>{
    return database.find((player)=> player.id === id);
};

export const inserPlayer = async (player: PlayerModel) =>{
  database.push(player)
}

export const deleteOnePlayer = async(id: number)=>{
  const index= database.findIndex(p=>p.id===id);

  if(index !== -1){
    database.splice(index, 1);
  }
}