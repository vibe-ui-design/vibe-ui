class FileChange {
  path string @description("Path to the file relative to the repository root")
  content string @description("Content of the file")
  insertions int @description("Number of lines added")
  deletions int @description("Number of lines removed")
  changeType "added" | "modified" | "deleted" @description("Type of change made to the file")
  language string @description("Programming language of the file")
}

class TechnicalDebt {
  description string @description("Description of the technical debt item")
  severity "low" | "medium" | "high" @description("Severity level of the technical debt")
  type "code-quality" | "testing" | "documentation" | "security" | "performance" | "maintainability" @description("Category of technical debt")
  suggestedFix string @description("Proposed solution to address the technical debt")
}

class ImpactAssessment {
  level "low" | "medium" | "high" @description("Overall impact level of the changes")
  scope "local" | "module" | "system-wide" @description("Scope of the impact in the codebase")
  affectedComponents string[] @description("List of components or modules affected by the changes")
  risks string[] @description("Identified risks and concerns")
  mitigations string[] @description("Suggested risk mitigations")
}

class KnowledgeInsight {
  type "documentation" | "best-practices" | "patterns" | "learnings" | "dependencies" @description("Category of knowledge insight")
  description string @description("Description of the insight or learning")
  actionItems string[] @description("List of actions to take based on this insight")
}

class Link {
  type "pr" | "issue" | "doc" | "external" @description("Type of reference link")
  url string @description("URL of the reference")
  title string @description("Title or description of the link")
  context string @description("How this link relates to the changes")
}

class ContributorStats {
  commitCount int @description("Number of commits")
  filesChanged int @description("Number of files modified")
  insertions int @description("Lines of code added")
  deletions int @description("Lines of code removed")
}

class TeamContribution {
  author string @description("Name of the contributor")
  stats ContributorStats @description("Contribution statistics")
  impactLevel "low" | "medium" | "high" @description("Overall impact level of the contributions")
}

class Feature {
  name string @description("Name of the feature")
  status "completed" | "in-progress" | "planned" @description("Current status of the feature")
  changes string[] @description("Changes made to this feature")
  impact ImpactAssessment @description("Impact assessment for this feature")
}

class FileSummary {
  summary string @description("Brief overview of the file changes")
  changes string[] @description("List of specific changes made")
  technicalNotes string[] @description("Technical implementation details and considerations")
  impact ImpactAssessment @description("Assessment of the change's impact")
  technicalDebt TechnicalDebt[] @description("Technical debt items identified")
  knowledgeInsights KnowledgeInsight[] @description("Learning opportunities and best practices")
  links Link[] @description("Related links and references")
}

class CodeQualityMetrics {
  testCoverage string @description("Test coverage assessment")
  complexity string @description("Code complexity assessment")
  maintainability string @description("Code maintainability assessment")
}

class CodeQuality {
  strengths string[] @description("Positive aspects of code quality")
  concerns string[] @description("Areas needing improvement")
  metrics CodeQualityMetrics @description("Code quality metrics")
}

class Summary {
  title string @description("Title summarizing the changes")
  description string @description("Detailed description of changes")
  highlights string[] @description("Key achievements and changes")
}

class TechnicalImpact {
  features Feature[] @description("Features affected or implemented")
  technicalDebt TechnicalDebt[] @description("Technical debt identified")
  codeQuality CodeQuality @description("Code quality assessment")
}

class TeamProgress {
  contributors TeamContribution[] @description("Individual contributor statistics")
  collaboration KnowledgeInsight[] @description("Team learning and knowledge sharing")
}

class References {
  prs Link[] @description("Related pull requests")
  issues Link[] @description("Related issues")
  docs Link[] @description("Documentation and external references")
}

class ComprehensiveAnalysis {
  summary Summary @description("Overview of changes")
  impact TechnicalImpact @description("Technical analysis and impact")
  team TeamProgress @description("Team and progress information")
  references References @description("Related links and references")
}

function SummarizeFileChange(file: FileChange, context: string?) -> FileSummary {
  client GPT4o
  prompt ##"
    {{ _.role("system") }}
    You are an expert code analyzer. Summarize the file change with clear actionable insights focused only on the EXACT code provided.

    IMPORTANT CONSTRAINTS:
    1. Only analyze the EXACT code content provided - do not invent or assume any code not present.
    2. If you're uncertain about something, indicate your uncertainty rather than making up details.
    3. Only reference specific files, URLs, or issues if they are explicitly mentioned in the code content.
    4. Provide technical debt findings only if you can cite specific code evidence.
    5. For all links and references, use ONLY the exact URLs found in comments or code.

    Focus on factual observations about key modifications, potential technical debt, impact assessment and any learning opportunities.

    {{ ctx.output_format }}

    {{ _.role("user") }}
    Analyze this file change:

    • Path: {{ file.path }}
    • Change Type: {{ file.changeType }}
    • Language: {{ file.language }}
    • Diff: +{{ file.insertions }} / -{{ file.deletions }}
    {% if context %}
      Repository Context:
      {{context}}
    {% endif %}

    Content:
    ```{{ file.language }}
    {{ file.content }}
    ```
  "##
}

function CombineFileSummaries(summaries: FileSummary[], commitSummary: string) -> ComprehensiveAnalysis {
  client GPT4o
  prompt ##"
    {{ _.role("system") }}
    You are a seasoned code reviewer and technical lead. Integrate the individual file summaries with the commit overview into one cohesive non-redundant report.

    IMPORTANT CONSTRAINTS:
    1. ONLY report on information explicitly found in the provided commit summary and file summaries.
    2. Do NOT invent feature names, URLs, pull requests, issues, or other references that aren't in the input data.
    3. If there is insufficient information for a section, state "Insufficient data available" rather than fabricating details.
    4. For technical debt and impact assessments, only include items with specific code evidence.
    5. Only include links that exactly match those found in the original data.
    6. For team contributions and other statistics, use ONLY the explicit data provided.

    Provide only specific, factual information derived from the input data.

    {{ ctx.output_format }}

    {{ _.role("user") }}
    Given the commit summary and the following file summaries produce a comprehensive analysis covering:
    - Overall summary of changes
    - Technical impact and risk assessment
    - Team progress and contributions

    Commit Summary:
    {{ commitSummary }}

    File Summaries:
    {% for summary in summaries %}
    ---
    Summary: {{ summary.summary }}

    Changes:
    {% for change in summary.changes %}
    - {{ change }}
    {% endfor %}

    Technical Notes:
    {% for note in summary.technicalNotes %}
    - {{ note }}
    {% endfor %}

    Impact:
      • Level: {{ summary.impact.level }}
      • Scope: {{ summary.impact.scope }}
      • Affected Components: {{ summary.impact.affectedComponents | join(", ") }}
      • Risks: {{ summary.impact.risks | join(", ") }}
      • Mitigations: {{ summary.impact.mitigations | join(", ") }}

    Technical Debt:
    {% for debt in summary.technicalDebt %}
      - [{{ debt.type }} | {{ debt.severity }}]: {{ debt.description }} (Fix: {{ debt.suggestedFix }})
    {% endfor %}

    Knowledge Insights:
    {% for insight in summary.knowledgeInsights %}
      - [{{ insight.type }}]: {{ insight.description }}
        Action Items:
        {% for item in insight.actionItems %}
        - {{ item }}
        {% endfor %}
    {% endfor %}

    Links:
    {% for link in summary.links %}
      - [{{ link.type }}] {{ link.title }}: {{ link.url }} ({{ link.context }})
    {% endfor %}
    {% endfor %}
  "##
}

test SummarizeFileChangeTest {
  functions [SummarizeFileChange]
  args {
    file {
      path "src/components/auth/login.tsx"
      content ##"
        // TODO: Add validation - see https://github.com/org/repo/issues/123
        // Related PR: https://github.com/org/repo/pull/456
        // Docs: https://docs.example.com/auth-patterns
        export function LoginForm() {
          const [email, setEmail] = useState('')
          const [password, setPassword] = useState('')

          const handleSubmit = async (e) => {
            e.preventDefault()
            // TODO: Add validation
            await signIn({ email, password })
          }

          return (
            <form onSubmit={handleSubmit}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
              <button type="submit">Login</button>
            </form>
          )
        }
      "##
      insertions 15
      deletions 0
      changeType "added"
      language "typescript"
    }
  }
  @assert(has_login_text, {{ this.summary|regex_match("login") }})
  @assert(has_form_text, {{ this.summary|regex_match("form") }})
  @assert(has_auth_text, {{ this.summary|regex_match("authentication") }})
  @assert(has_technical_debt, {{ this.technicalDebt|length > 0 }})
  @assert(has_impact_components, {{ this.impact.affectedComponents|length > 0 }})
  @assert(has_knowledge_items, {{ this.knowledgeInsights|length > 0 }})
  @assert(has_link_items, {{ this.links|length > 0 }})
  @assert(has_pr_link_item, {{ this.links|filter(l => l.type == "pr")|length > 0 }})
  @assert(has_issue_link_item, {{ this.links|filter(l => l.type == "issue")|length > 0 }})
  @assert(has_doc_link_item, {{ this.links|filter(l => l.type == "doc")|length > 0 }})
}

test CombineFileSummariesTest {
  functions [CombineFileSummaries]
  args {
    summaries [
      {
        summary "Added new login form component with basic email/password authentication"
        changes [
          "Created LoginForm component with email and password fields"
          "Added form submission handler"
          "Integrated with signIn function"
        ]
        technicalNotes [
          "Utilizes React hooks for state management"
          "Form validation is pending implementation"
          "Simple TypeScript structure"
        ]
        impact {
          level "medium"
          scope "module"
          affectedComponents ["auth", "forms"]
          risks ["Lack of validation may cause security issues"]
          mitigations ["Introduce input validation using a zod schema"]
        }
        technicalDebt [
          {
            type "security"
            severity "medium"
            description "Missing form validation"
            suggestedFix "Add validation using a zod schema"
          }
        ]
        knowledgeInsights [
          {
            type "best-practices"
            description "Patterns for implementing authentication forms"
            actionItems [
              "Document validation requirements"
              "Share authentication best practices"
            ]
          }
        ]
        links [
          {
            type "pr"
            url "https://github.com/org/repo/pull/456"
            title "Add login form component"
            context "Implementation of the login form"
          }
          {
            type "issue"
            url "https://github.com/org/repo/issues/123"
            title "Implement form validation"
            context "Task to add input validation"
          }
          {
            type "doc"
            url "https://docs.example.com/auth-patterns"
            title "Authentication Patterns"
            context "Reference for auth implementation"
          }
        ]
      }
    ]
    commitSummary ##"
      Summary: Implemented user authentication with a new login system.

      Key Changes:
      - Introduced login form component
      - Developed authentication API endpoints
      - Established token management system

      Related PR: https://github.com/org/repo/pull/789
      Fixes: https://github.com/org/repo/issues/101

      Impact Analysis:
      Sets the foundation for a secure user authentication system.

      Statistics:
      Files Changed: 5 Lines Added: +150 Lines Removed: -20
    "##
  }
  @assert(has_summary_title, {{ this.summary.title|length > 0 }})
  @assert(has_summary_desc, {{ this.summary.description|length > 0 }})
  @assert(has_summary_highlights, {{ this.summary.highlights|length > 0 }})
  @assert(has_impact_features, {{ this.impact.features|length > 0 }})
  @assert(has_impact_debt, {{ this.impact.technicalDebt|length > 0 }})
  @assert(has_quality_metrics, {{ this.impact.codeQuality.metrics|keys|length > 0 }})
  @assert(has_team_contributors, {{ this.team.contributors|length > 0 }})
  @assert(has_team_collab, {{ this.team.collaboration|length > 0 }})
  @assert(has_project_value, {{ this.project.businessValue|length > 0 }})
  @assert(has_ref_prs, {{ this.references.prs|length > 0 }})
  @assert(has_ref_issues, {{ this.references.issues|length > 0 }})
  @assert(has_ref_docs, {{ this.references.docs|length > 0 }})
}