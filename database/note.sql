-- public."Notes" definition

-- Drop table

-- DROP TABLE public."Notes";

CREATE TABLE public."Notes" (
	id serial4 NOT NULL,
	title varchar(255) NULL,
	"content" text NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Notes_pkey" PRIMARY KEY (id)
);

-- public."Tags" definition

-- Drop table

-- DROP TABLE public."Tags";

CREATE TABLE public."Tags" (
	id serial4 NOT NULL,
	"name" varchar(255) NULL,
	CONSTRAINT "Tags_pkey" PRIMARY KEY (id)
);

-- public."NoteTags" definition

-- Drop table

-- DROP TABLE public."NoteTags";

CREATE TABLE public."NoteTags" (
	id_note int4 NULL,
	id_tag int4 NULL
);


-- public."NoteTags" foreign keys

ALTER TABLE public."NoteTags" ADD CONSTRAINT notetag_id_note_fk FOREIGN KEY (id_note) REFERENCES public."Notes"(id) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE public."NoteTags" ADD CONSTRAINT notetag_id_tag_fk FOREIGN KEY (id_tag) REFERENCES public."Tags"(id) ON DELETE CASCADE ON UPDATE CASCADE;