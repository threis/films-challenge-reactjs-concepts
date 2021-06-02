import { Button } from "./Button";

interface SideBarProps {
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
  genres: Genre[];
}

type Genre = {
  id: number;
  title: string;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
};

export function SideBar({
  selectedGenreId,
  setSelectedGenreId,
  genres,
}: SideBarProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: Genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
