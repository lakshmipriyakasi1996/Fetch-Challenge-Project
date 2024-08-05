import ListItem from './ListItem';

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
export default List;
