# 세미나 자동 동기화 (Notion → 홈페이지)

랩원들은 **Notion에서만** 세미나를 작성하면, 자동으로 홈페이지 Activity의 세미나 목록·리뷰 모달에 반영됩니다. GitHub나 코드는 건드릴 필요가 없습니다.

```
Notion 세미나 DB 편집  →  (매일 자동 / "지금 실행" 버튼)  →  홈페이지에 반영
```

---

## 랩원 사용법 (평소)

1. Notion 세미나 데이터베이스에서 **새 행 추가** 또는 기존 행 편집.
2. 칸 입력: **Title, Date, Presenter, Category, Keywords**.
3. **세미나 리뷰/요약은 그 행의 페이지 본문**에 자유롭게 작성 (제목·리스트·이미지 등 그대로 홈페이지 모달에 표시됨).
4. 다 되면 **`Published` 체크박스 ✅**.
5. 다음 동기화(매일 자동) 때 사이트에 뜹니다. 바로 반영하고 싶으면 아래 "지금 실행"을 누르면 됩니다.

> `Published` 체크를 해제하면 다음 동기화 때 사이트에서 사라집니다. **Notion DB가 세미나의 원본**이며, `content/seminars/` 폴더는 자동 생성되므로 직접 수정하지 마세요.

### 지금 바로 반영하기 ("Run workflow")
GitHub 저장소 → **Actions** 탭 → 왼쪽 **"Sync seminars from Notion"** → 오른쪽 **"Run workflow"** 버튼.

---

## 최초 1회 설정 (owner)

### 1) Notion 데이터베이스 준비
기존 세미나 DB를 그대로 써도 됩니다. 컬럼(속성)은 다음 이름/타입이어야 합니다 (이름이 다르면 `web/scripts/sync-seminars.mjs`의 `F = {...}`만 바꾸면 됩니다):

| 속성 | 타입 | 비고 |
|---|---|---|
| `Title` | Title | 세미나 제목 |
| `Date` | Date | 발표일 |
| `Presenter` | People 또는 Text | 발표자 |
| `Category` | Select | `Lab Seminar` / `Paper Review` |
| `Keywords` | Multi-select | (Text면 쉼표 구분) |
| `Published` | Checkbox | 체크된 것만 사이트에 노출 |

### 2) Notion 통합(Integration) 연결
1. https://www.notion.so/my-integrations → **New integration** 생성 → **Internal Integration Secret** 복사 (`ntn_...` 또는 `secret_...`).
2. 세미나 DB 페이지 우측 상단 **… → Connections → 방금 만든 integration 추가** (DB에 읽기 권한 부여).
3. DB의 **Database ID** 확보: DB를 전체 페이지로 열었을 때 URL `notion.so/<워크스페이스>/<32자리 ID>?v=...` 의 32자리 부분.

### 3) 저장소 Secret 추가 (`UNIST-DA/homepage_new`)
GitHub 저장소 → **Settings → Secrets and variables → Actions → New repository secret** 로 2개 추가:
- `NOTION_TOKEN` = Integration Secret
- `NOTION_SEMINAR_DB_ID` = Database ID

### 4) 첫 실행
Actions 탭 → "Sync seminars from Notion" → **Run workflow**. 성공하면 `content/seminars/`가 Notion 기준으로 갱신되고, 이어서 배포 워크플로가 사이트를 업데이트합니다.

---

## 참고
- 스크립트: `web/scripts/sync-seminars.mjs` (로직 점검: `npm run sync:seminars --selftest` … 실제로는 `node scripts/sync-seminars.mjs --selftest`).
- 워크플로: `web/.github/workflows/sync-seminars.yml` (매일 09:00 KST + 수동).
- 본문 속 이미지는 `public/assets/seminars/<slug>/`로 자동 다운로드됩니다 (Notion 이미지 URL은 만료되므로 로컬 저장).
