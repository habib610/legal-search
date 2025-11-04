class Document:
    id: int
    title: str
    description: str
    owner: str
    type: str
    date: str

    def __init__(
        self, id: int, title: str, description: str, owner: str, type: str, date: str
    ):
        self.id = id
        self.title = title
        self.description = description
        self.owner = owner
        self.type = type
        self.date = date
