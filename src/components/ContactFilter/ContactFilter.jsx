export const ContactFilter = ({ filter, handlerFilter }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <input
          type="text"
          name="name"
          value={filter}
          onChange={handlerFilter}
        />
      </label>
    </form>
  );
};
