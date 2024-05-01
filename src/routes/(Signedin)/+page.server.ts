import { asc } from "drizzle-orm"
import { db } from "../../db/db"
import { todo_tags,todo,users } from "../../db/schema"
import { eq } from 'drizzle-orm';

export const load = async ()=>{
    // const todos= await db.select().from(todo).orderBy(asc(todo.tag_id))
    // const tags = await db.query.todo_tags.findMany()
    //parallise the above request
    //haeleo
    const [ todos,tags] = await Promise.all([
        db.select().from(todo).orderBy(asc(todo.tag_id)),
        db.query.todo_tags.findMany()
    ])
    return {
        tags,
        todos
    }
}

export const actions = {
    newList: async ({ request }: any) => {
      const formData = await request.formData();
      const newList = formData.get('list')
      if(newList.length>10){
        return {
          error:true,
          message:"List name should be less than 10 characters",
          newList
        }
      }
      const response = await db.insert(todo_tags).values({
        title:newList
      })

      return {
          success:true,
      };
    },
    addTodo: async ({ request }: any) => {
      const formData = await request.formData();
      const title = formData.get('title')
      const tag_id = formData.get('tag')
      const email = formData.get('email')

      const response = await db.insert(todo).values({
        title,
        tag_id,
        user_id:email
      })

      console.log(response,"////////....")

      return {
          success:true,
      };
    },
    deleteTodo: async ({ request }: any) => {
      const formData = await request.formData();
      const id = formData.get('todoId')
       const response = await db.delete(todo).where(eq(todo.id,id))
      return {
          success:true,
      };
    }
  };
  