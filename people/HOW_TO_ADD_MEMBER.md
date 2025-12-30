# 如何添加新成员

## 步骤1: 准备成员照片

1. 将成员照片放入 `assets/img/people/` 文件夹
2. 推荐尺寸: 300x300像素或更大
3. 文件名示例: `student1.jpg`, `professor.png`, `member1.webp`

## 步骤2: 创建成员MD文件

在 `people/` 文件夹中创建新的 `.md` 文件（例如：`student4.md`）

### 文件内容格式：

```markdown
---
name: 张三
title: Ph.D. Student
period: 2025.08 ~ Present
photo: student4.jpg
homepage: https://example.com
google_scholar: https://scholar.google.com/citations?user=XXXXX
email: zhangsan@example.com
co_supervised: Co. w. Prof. 李四
order: 4
---
```

### 字段说明：

- **name**: 必填 - 成员姓名
- **title**: 必填 - 职位（Research Fellow, Ph.D. Student, Master Student, Visiting Scholar等）
- **period**: 必填 - 时间段
- **photo**: 必填 - 照片文件名（如果没有照片，使用 `default-avatar.jpg`）
- **homepage**: 可选 - 个人主页链接
- **google_scholar**: 可选 - Google Scholar主页链接
- **email**: 可选 - 邮箱地址
- **co_supervised**: 可选 - 联合指导信息
- **order**: 必填 - 排序顺序（数字越小越靠前）

## 步骤3: 注册MD文件

编辑 `assets/js/members.js` 文件，在 `memberFiles` 数组中添加新文件路径：

```javascript
const memberFiles = [
    'people/student1.md',
    'people/student2.md',
    'people/student3.md',
    'people/student4.md'  // 添加新成员
];
```

## 步骤4: 刷新页面

保存所有文件后，刷新 `people.html` 页面，新成员会自动显示。

## 注意事项

- 所有字段的值不要包含冒号（:）
- 如果某个字段为空，保留字段名但值留空（例如：`email: `）
- 确保照片文件确实存在于 `assets/img/people/` 文件夹中
- 社交链接图标会根据是否填写自动显示/隐藏

## 社交链接图标

- 🏠 Homepage (个人主页)
- 🎓 Google Scholar
- ✉️ Email (邮箱)

只有填写了对应链接的字段，图标才会显示。

