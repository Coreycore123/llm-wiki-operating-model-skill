#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage:
  ./install.sh codex
  ./install.sh claude
  ./install.sh openclaw
  ./install.sh agents

Targets:
  codex     Install to ~/.codex/skills/llm-wiki-operating-model
  claude    Install to ~/.claude/skills/llm-wiki-operating-model
  openclaw  Install to ~/.openclaw/skills/llm-wiki-operating-model
  agents    Install to ~/.agents/skills/llm-wiki-operating-model
EOF
}

if [ "${1:-}" = "" ]; then
  usage
  exit 1
fi

case "$1" in
  codex)
    target="$HOME/.codex/skills/llm-wiki-operating-model"
    ;;
  claude|claudecode|claude-code)
    target="$HOME/.claude/skills/llm-wiki-operating-model"
    ;;
  openclaw)
    target="$HOME/.openclaw/skills/llm-wiki-operating-model"
    ;;
  agents)
    target="$HOME/.agents/skills/llm-wiki-operating-model"
    ;;
  *)
    usage
    exit 1
    ;;
esac

source_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/llm-wiki-operating-model"

if [ ! -f "$source_dir/SKILL.md" ]; then
  echo "Cannot find skill source at $source_dir" >&2
  exit 1
fi

mkdir -p "$(dirname "$target")"
rm -rf "$target"
cp -R "$source_dir" "$target"

echo "Installed llm-wiki-operating-model to $target"

