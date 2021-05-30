export default function GetPostCategoryName(data,id) {
          for (let i=0; i<data.total; i++) {
                    if (data.category[i].id===id)
                              return (data.category[i].name)
          }
}