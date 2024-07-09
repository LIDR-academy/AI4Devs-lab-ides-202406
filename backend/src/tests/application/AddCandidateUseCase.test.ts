import { AddCandidateUseCase } from '../../application/AddCandidateUseCase';
import { Candidate } from '../../domain/entities/Candidate';

class MockCandidateRepository {
    public async add(candidate: Candidate): Promise<void> {
        // Mock implementation
    }
}

describe('AddCandidateUseCase', () => {
    it('should add a candidate', async () => {
        const mockRepository = new MockCandidateRepository();
        const useCase = new AddCandidateUseCase(mockRepository);
        const candidate = new Candidate('John', 'Doe', 'john.doe@example.com', '1234567890', '123 Main St');

        await expect(useCase.execute(candidate)).resolves.not.toThrow();
    });
});