
export const Search = ()=>{
 return(
  <form action="" className="searchBar" >
      <div className="svg-holder" >
       <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 22C17.299 22 22 17.299 22 11.5C22 5.70101 17.299 1 11.5 1C5.70101 1 1 5.70101 1 11.5C1 17.299 5.70101 22 11.5 22Z" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.925 18.925L25 25" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
      </div>
      <input className="searchInput" type="text" placeholder="Search for projects, apps and all" />
  </form>
 );
}