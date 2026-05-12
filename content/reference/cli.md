---
title: "CLI"
description: "This reference guide describes the create-thulite CLI and all of its options."
summary: "This reference guide describes the create-thulite CLI and all of its options."
date: 2026-04-28T14:55:21+02:00
lastmod: 2026-04-28T14:55:21+02:00
draft: false
weight: 405
params:
  toc: true
  seo:
    title: "" # custom title (optional)
    description: "" # custom description (recommended)
    canonical: "" # custom canonical URL (optional)
    robots: "" # custom robot tags (optional)
---
This reference guide describes the `create-thulite` CLI and all of its options.

## Usage

```bash
npm create thulite@latest [DIRECTORY] [TEMPLATE] -- [OPTIONS]
```

The CLI creates a new Thulite project in the specified directory, using the specified template. When running in a TTY (interactive terminal), it starts in interactive mode and prompts for any missing information.

## Arguments

### `DIRECTORY`

The name of the directory to create the project in. A string — for example `"my-project"`. Defaults to `"thulite-project"` when not provided in non-interactive mode, or prompted for in interactive mode.

### `TEMPLATE`

The template to scaffold the project from. A string — must be one of the [available template names](#--template). Can be passed as the second positional argument as a shorthand for `--template`.

## Options

### `--template`

**Alias:** `-t`

The template to scaffold the project from. A string — must be one of the available template names listed below. When omitted in interactive mode, the CLI will prompt for a framework and variant selection. When omitted in non-interactive mode, defaults to `"basic"`.

**Templates with recommended integrations (SEO and Images):**

| Name | Description |
|---|---|
| `doks` | Doks theme |
| `bolt` | Bolt theme |
| `tailwindcss-rec` | Tailwind CSS starter |
| `bootstrap-rec` | Bootstrap starter |
| `basic-rec` | Basic starter |

**Templates without recommended integrations:**

| Name | Description |
|---|---|
| `tailwindcss` | Tailwind CSS starter |
| `bootstrap` | Bootstrap starter |
| `basic` | Basic starter |

**Examples:**

```bash
npm create thulite@latest my-project -- --template doks
npm create thulite@latest my-project -- -t tailwindcss-rec
npm create thulite@latest my-project doks
```

### `--immediate`

**Alias:** `-i`

A boolean flag. When set, the CLI will automatically install dependencies and start the development server after scaffolding. When omitted in interactive mode, the CLI will prompt whether to install and start now. When omitted in non-interactive mode, defaults to `false`.

**Example:**

```bash
npm create thulite@latest my-project -- --template basic-rec --immediate
```

### `--overwrite`

A boolean flag. When set, any existing files in the target directory will be removed before scaffolding. When omitted in interactive mode, the CLI will prompt how to proceed if the target directory is not empty. When omitted in non-interactive mode, the operation is cancelled if the target directory is not empty.

**Example:**

```bash
npm create thulite@latest my-project -- --overwrite
```

### `--interactive` / `--no-interactive`

A boolean flag. Forces the CLI to run in interactive or non-interactive mode, overriding the automatic TTY detection. Use `--no-interactive` to run without prompts, for example in CI/CD environments. Defaults to the result of TTY detection.

**Example:**

```bash
npm create thulite@latest my-project -- --template doks --no-interactive
```

### `--help`

**Alias:** `-h`

A boolean flag. Prints the help message describing usage, available options, and templates, then exits.

**Example:**

```bash
npm create thulite@latest -- --help
```
