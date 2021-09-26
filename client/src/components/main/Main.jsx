import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadingTimeline } from '../../redux/features/timeline';




function Main() {
  const data = useSelector(state => state.users.data)


  const loadTimeline = useSelector(state => state.timeline.loadTimeline)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(loadingTimeline())
  }, [])

  return (
    <div style={{textAlign: "center"}}>
      <h1>Страница где будет выводиться таймлайн</h1>
      <hr/>

      {data ? <Link className={"timeline__button"} to={"/createTimeLine"}>Создать ТаймЛайн?</Link> :
      <p>Войдите в систему чтобы добавлять ТаймЛайн</p>
      }



      {loadTimeline.map((item) => {
        return (
          <div key={item._id}>
          <h2 style={{marginTop: "20px"}}>{item.title}</h2>
            <img style={{width: "500px", display: "block", marginLeft: "100px"}} src={item.img} alt=""/>
            <p>{item.description}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Main;